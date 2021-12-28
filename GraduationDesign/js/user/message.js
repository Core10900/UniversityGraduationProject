
function randerUserData(data){
    let messboxEle=document.getElementById("messbox");
    messboxEle.innerHTML="";
    let str=`<div class="mess" id="account">${data.account}</div>
    <div class="mess" id="astatus">${data.ustatus}</div>
    <div class="mess" id="school">${data.school}</div>
    <div class="mess" id="aname">${data.screen}</div>`;
    messboxEle.innerHTML=str;
}
function ajaxUserMessage(uid){
    return new Promise((resove)=>{
        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/user/message.php?uid=${uid}`);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            randerUserData(data)
            console.log(data);
        }
    })
}
function UserDataAJAX(){
    let cookieres = document.cookie;
    let cookiearr = cookieres.split(";");
    let uid = cookiearr[0].split("=");
    uid = Number(uid[1]);
    ajaxUserMessage(uid);
}
let messageEle = document.getElementById("message");
messageEle.onclick = function () {
    let showEles = document.querySelectorAll(".show");
    showEles.forEach((item) => {
        let id = item.getAttribute('id');
        if (id == "show1") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
    UserDataAJAX();
}
window.onload=function(){
    UserDataAJAX();
}