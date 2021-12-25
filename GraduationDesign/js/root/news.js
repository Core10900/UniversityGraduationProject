var p=1;
var page;

function ajaxnew(){
    return new Promise((resove,rejeck)=>{
        $.ajax({
            type: "post",
            url: '../php/root/newlist.php',
            contentType:false,
            processData:false,
            success: function (data) {
                // console.log(JSON.parse(data));
                // resove("");
                randerNewlist(JSON.parse(data));
                resove("");
                
            }
        })
    })
}
function ajaxnewcount(){
    return new Promise((resove)=>{
        $.ajax({
            type: "post",
            url: '../php/root/newlistcount.php',
            contentType:false,
            processData:false,
            success: function (data) {
                // console.log(JSON.parse(data));
                // resove("");
                // console.log(JSON.parse(data));
                let arr=JSON.parse(data);
                page=Math.ceil(Number(arr['c'])/3);
                resove(page);
            }
        })
    })
}

    

function randerNewlist(data){
    let newlistinit=document.getElementById("getnew");
    newlistinit.innerHTML="";
    data.forEach((item)=>{
        let divEle=document.createElement("div");
        divEle.className="newpate";
        divEle.innerHTML=`<p class="getnewtitle">${item.title}</p>
        <div class="newoperation"><span class="time">${item.time}</span><button class="delnew" id="${item.id}">删除</button></div>`;
        newlistinit.appendChild(divEle);
    })
    newdel();
}
function initpage(){
    return new Promise((resove)=>{
     
            let pages=document.getElementById("newpages");
            pages.innerHTML=`${p}/${page}`;
            resove("");
    })
        
}
function btnpage(p){
    return new Promise((resove)=>{
     
            let pages=document.getElementById("newpages");
            pages.innerHTML=`${p}/${page}`;
            resove("");
    })
        
}
function ajaxnewbtns(p){
    return new Promise((resove)=>{
        $.ajax({
            type: "get",
            url: `../php/root/newlist.php?p=${p}`,
            success: function (data) {
                // console.log(JSON.parse(data));
                // resove("");
                randerNewlist(JSON.parse(data));
                // console.log(p);
                resove("");
                
            }
        })
    })
}
async function newlistbtnfn(p){
    try{
        let res1=await ajaxnewbtns(p);
        console.log(res1);
        let res2=await btnpage(p);
        console.log(res2);
    }catch(error){
        console.log(error);
    }finally{
        console.log("执行完毕");
    }
}
async function newinitlistfn(){
    
    try{
     let res1=await ajaxnewcount();
    //   console.log(res1);
    let res2=await ajaxnew();
    //   console.log(res2);
      let res3=await initpage();
    //   console.log(res3);
    }catch(error){
      console.log(error);
  }finally{
    // console.log("执行完毕");
    }
  }

var newsbtn=document.getElementById("news");
newsbtn.onclick=function(){
    let showNews=document.getElementById("show1");
    showNews.style.display="block";
    let others=document.querySelectorAll(".show");
    others.forEach((item)=>{
        let showid=item.getAttribute("id");
        if(showid!="show1"){
            item.style.display="none";
        }
    })
    newinitlistfn();
}
var newprovbtn=document.getElementById("newprevbtn");
// console.log(newprovbtn);
newprovbtn.onclick=function(){
    if(p==1){

    }else{
        --p;
        // console.log(p);
        newlistbtnfn(p);
    }
}
var newnextbtn=document.getElementById("newnextbtn");
// console.log(newnextbtn);
newnextbtn.onclick=function(){
    if(p==page){

    }else{
        ++p;
        // console.log(p);
        newlistbtnfn(p);
        
    }
}
function newdel(){
    let newdelbtn=document.getElementsByClassName("delnew");
    // console.log(newdelbtn);
    [...newdelbtn].forEach((item)=>{
        item.onclick=function(){
            let nid=item.getAttribute("id");
            // console.log(nid);
            let xhr;
            if(window.XMLHttpRequest){
                xhr=new XMLHttpRequest();
            }
            else{
                xhr=new ActiveXObject();
            }
            xhr.open("get",`../php/root/newdel.php?nid=${nid}`,true);
            xhr.send();
            xhr.onload=function(){
                console.log(JSON.parse(xhr.responseText));
                newinitlistfn();
            }
        }
    })
}
