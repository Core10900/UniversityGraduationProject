var userP=1;
var userPage;
function ajaxCountUser(){
    return new Promise((resove,rejeck)=>{
        $.ajax({
            type: "post",
            url: '../php/root/countuser.php',
            contentType:false,
            processData:false,
            success: function (data) {
                // console.log(JSON.parse(data));
                // console.log(JSON.parse(data['c']));
                let arr=JSON.parse(data);
                // console.log(arr);
                let num=parseInt(arr.c);
                // console.log(num);
                // let num=parseInt(arr['c']);
                userPage=Math.ceil(num/8);
                // resove("");
                // randerNewlist(JSON.parse(data));
                randerUserPages(userP,userPage);
                resove("");
                
            }
        })
    })
}
function randerUserList(data){
    let getuserEle=document.getElementById("getuser");
    getuserEle.innerHTML="";
    data.forEach(function(item){
        let uid=Number(item.id);
        let UserdivEle=document.createElement("div");
        UserdivEle.className="userinfor";
        UserdivEle.innerHTML=`<span class="username">${item.username}</span>
        <span class="userstatus">${item.ustatus}</span>
        <button class="useroperate" id="${uid}">${item.ustatus=='正常'?"封禁":"解封"}</button>`;
        getuserEle.appendChild(UserdivEle);
    })
    UserProvBtn();
    UserNextBtn();
    userDeblocking();
}
function randerUserPages(p,page){
    let userpagesEle=document.getElementById("userpages");
    userpagesEle.innerHTML="";
    let str=`${p}/${page}`;
    userpagesEle.innerHTML=str;
    UserProvBtn();
    UserNextBtn();
    userDeblocking();
}

function ajaxUser(){
    return new Promise((resove,rejeck)=>{
        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get","../php/root/userlist.php",true);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            randerUserList(data);
        }

    })
}
/*
function ajaxUserBtn(p,page){
    return new Promise((resove,rejeck)=>{
        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/root/userlist.php?u=${p}`,true);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            randerUserList(data);
            randerUserPages(p,page)
        }

    })
}*/
function ajaxUserBtn(p){
    return new Promise((resove)=>{
        $.ajax({
            type: "get",
            url: `../php/root/userlist.php?u=${p}`,
            success: function (data) {
                // console.log(JSON.parse(data));
                // resove("");
                randerUserList(JSON.parse(data));
                // console.log(p);
                resove("");
                
            }
        })
    })
}
async function inituserlist(){
    try{
        userP=1;
        let res1=await ajaxCountUser();
        console.log(res1);
        let res2=await ajaxUser();
        console.log(res2);
    }catch(error){
        console.log(error);
    }finally{
        console.log("用户数据请求完毕");
    }
}



var userbtn=document.getElementById("user");
userbtn.onclick=function(){
    let showUser=document.getElementById("show2");
    showUser.style.display="block";
    let others=document.querySelectorAll(".show");
    others.forEach((item)=>{
        let showid=item.getAttribute("id");
        if(showid!="show2"){
            item.style.display="none";
        }
    })
    inituserlist();
}
function UserProvBtn(){
    let userprovbtnEle=document.getElementById("userprevbtn");
    userprovbtnEle.onclick=function(){
        if(userP==1){

        }else{
            --userP;
            ajaxUserBtn(userP);
            randerUserPages(userP,userPage);
        }
    }
}
function UserNextBtn(){
    let usernextbtnEle=document.getElementById("usernextbtn");
    usernextbtnEle.onclick=function(){
        if(userP==userPage){

        }else{
            ++userP;
            ajaxUserBtn(userP);
            randerUserPages(userP,userPage);
        }
    }
}
function DeblockingEvent(uid,ustatus){
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
function userDeblocking(){
    let DeblockingBtns=document.querySelectorAll(".useroperate");
    DeblockingBtns.forEach((item)=>{
        item.onclick=function(){
            let uid=this.getAttribute("id");
            // console.log(uid);
            let ustatus=this.previousElementSibling.innerHTML;
            // console.log(ustatus);
            DeblockingEvent(uid,ustatus);
            inituserlist();
        }
    })
}
