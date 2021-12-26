var searUp=1;
var searUpage;

function initsearchresshow(){
    let searchresshowEle=document.getElementById("searchres");
    searchresshowEle.innerHTML="";
}

function ajaxSearchUserCount(name){
    return new Promise((resove)=>{
        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/root/searchusernamecount.php?name=${name}`,true);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            // console.log(data);
            let num=Number(data.c);
            // console.log(num);
            searUpage=Math.ceil(num/8);
            randerDomSerchResPage(searUp,searUpage);
            // console.log(searUpage);
            resove(searUpage);
        }
    })
}

function ajaxSearchUser(name1){
    return new Promise((resove)=>{
        let xhrr;
        if(window.XMLHttpRequest){
            xhrr=new XMLHttpRequest();
        }else{
            xhrr=new ActiveXObject();
        }
        xhrr.open("get",`../php/root/searchusername.php?name=${name1}`,true);
        xhrr.send();
        xhrr.onload=function(){
            let data=JSON.parse(xhrr.responseText);
            randerDomSerchRes(data);
            console.log(data);
            resove("成功");
        }
    })
}
function randerDomSerchRes(data){
    let divEleres=document.getElementById("searchres");
    divEleres.innerHTML="";
    data.forEach(function(item){
        let uid=Number(item.id);
        let userinfordivEle=document.createElement("div");
        userinfordivEle.className="userinfor";
        userinfordivEle.innerHTML=`<span class="username">${item.username}</span>
        <span class="userstatus">${item.ustatus}</span>
        <button class="useroperate" id="${uid}">${item.ustatus=='正常'?"封禁":"解封"}</button>`;
        divEleres.appendChild(userinfordivEle);

    })
    searchUserProvBtn();
    searchUserNextBtn();
    searuserDeblocking();
}
function randerDomSerchResPage(p,page){
    let searchuserpageEle=document.getElementById("searuserpages");
    searchuserpageEle.innerHTML=`${p}/${page}`;
}
async function ajaxSearchUserKey(name,name1){
    try{
        let res1=await ajaxSearchUserCount(name);
        console.log(res1);
        let res2=await ajaxSearchUser(name1);
        console.log(res2);
        // console.log(123);
    }catch(error){
        console.log(error);
    }finally{
        console.log("执行完毕")
    }
}
function searchUser(){
    let usernamereg = /^[\u4e00-\u9fa5]{1,4}$/;
    let searchUserBtn=document.getElementById("searUserBtn");
    searchUserBtn.onclick=function(){
        let searchinputuser=document.getElementById("inputname").value;
        if(searchinputuser==""){
            alert("输入框不能为空！");
        }else if(!usernamereg.test(searchinputuser)){
            alert("姓名关键词必须是1-4个汉字！");
        }else{
            ajaxSearchUserKey(searchinputuser,searchinputuser);
        }
    }
}
function ajaxSearchUserBtn(p,name){
    return new Promise((resove)=>{
        $.ajax({
            type: "get",
            url: `../php/root/searchusername.php?p=${p}&name=${name}`,
            success: function (data) {
                console.log(JSON.parse(data));
                randerDomSerchRes(JSON.parse(data));
                // resove("");
                // randerUserList(JSON.parse(data));
                // console.log(p);
                resove("");
                
            }
        })
    })
}

function searchUserProvBtn(){
    let searuserprovbtnEle=document.getElementById("searuserprevbtn");
    searuserprovbtnEle.onclick=function(){
        let searchinputuser=document.getElementById("inputname").value;
        if(searUp==1){

        }else{
            --searUp;
            ajaxSearchUserBtn(searUp,searchinputuser);
            randerDomSerchResPage(searUp,searUpage);
            // randerUserPages(userP,userPage);
        }
    }
}
function searchUserNextBtn(){
    let searusernextbtnEle=document.getElementById("searusernextbtn");
    searusernextbtnEle.onclick=function(){
        let searchinputuser=document.getElementById("inputname").value;
        if(searUp==searUpage){

        }else{
            ++searUp;
            ajaxSearchUserBtn(searUp,searchinputuser);
            randerDomSerchResPage(searUp,searUpage);
            // randerUserPages(userP,userPage);
        }
    }
}
function SearchDeblockingEvent(uid,ustatus){
    return new Promise((resove)=>{
        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/root/userdeb.php?deb=${uid}&sta=${ustatus}`,true);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            console.log(data);
        }
    })
}
function searuserDeblocking(){
    let searDeblockingBtns=document.querySelectorAll(".useroperate");
    searDeblockingBtns.forEach((item)=>{
        item.onclick=function(){
            let uid=this.getAttribute("id");
            // console.log(uid);
            let searustatus=this.previousElementSibling.innerHTML;
            console.log(searustatus);
            SearchDeblockingEvent(uid,searustatus);
            // inituserlist();
            initsearchresshow();
            let inputSearEle=document.getElementById("inputname");
            inputSearEle.value="";

        }
    })
}


var searchUserbtn=document.getElementById("searchUser");
searchUserbtn.onclick=function(){
    let showsearchUser=document.getElementById("show3");
    showsearchUser.style.display="block";
    let others=document.querySelectorAll(".show");
    others.forEach((item)=>{
        let showid=item.getAttribute("id");
        if(showid!="show3"){
            item.style.display="none";
        }
    })
    initsearchresshow();
    searchUser();
    
}
