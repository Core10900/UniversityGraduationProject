let publishEle=document.getElementById("publish");
publishEle.onclick=function(){
    window.location.href="./publish.html";
}
let userEle=document.getElementById("user");
// console.log(userEle);
userEle.onclick=function(){
    let cookieres=document.cookie;
    // console.log(cookieres);
    let cookiearr=cookieres.split(";");
    let uid=cookiearr[0].split("=");
    // let ustatus=cookiearr[1].split("=");
    // ustatus=ustatus[1];
    uid=Number(uid[1]);
    if(uid>0){
        window.location.href="./user.html";
    }else{
        alert("账号未登录，无法进入个人空间！");
    }
    
}