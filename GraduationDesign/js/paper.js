let pubcombtnEle=document.getElementById("pub-com");
pubcombtnEle.onclick=function(){
    let inputEle=document.getElementById("input");
    
    if(inputEle.style.display=="block"){
        inputEle.style.display="none";
    }else{
        inputEle.style.display="block";
    }
}
let cancelbtnEle=document.getElementById("cancel");
cancelbtnEle.onclick=function(){
    let inputEle=document.getElementById("input");
    inputEle.style.display="none";
}
let subbtnEle=document.getElementById("sub");
subbtnEle.onclick=function(){
    let pid=window.location.search.substring(5);
    let cookieres=document.cookie;
    let uid;
    let ustatus;
    if(cookieres.length<4){
        uid=undefined;
        ustatus=undefined;
    }else{
        let cookiearr=cookieres.split(";");
        uid=cookiearr[0].split("=");
        ustatus=cookiearr[1].split("=");
        ustatus=ustatus[1];
        uid=Number(uid[1]);
    }
    // let regtxt=/^\W{1,30}$/;
    let val=String(document.getElementsByTagName("textarea")[0].value);
    if(val==""){
        alert("评论内容不能为空！");
    }else if(val.length>50){
        alert("评论内容过多，请合理删减评论内容！（50字以内）");
     }
    // else if(!regtxt.test(val)){
    //     alert("仅支持中文评论！");
    // }
    else if(uid==undefined){
        alert("未获取到用户信息，请检查账号是否已登录或浏览器是否支持cookie，准备完毕请前往首页进行登录");

    }else if(ustatus!='正常'){
        alert("您的账号已经被封禁，暂时没有权限申请发布论文，如果有疑问请给官方发送邮件申请解封（官方邮箱：1600661295@qq.com）");
    }else{
        console.log(pid,uid,val);
        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/paper.php?pid=${pid}&uid=${uid}&val=${val}`);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            console.log(data);
            if(data[0]==1){
                let clearEle=document.getElementsByTagName("textarea")[0];
                clearEle.value="";
                alert("成功发表评论");
                let inputEle=document.getElementById("input");
                inputEle.style.display="none";
            }else{
                alert("评论失败");
            }
        }
    }
}
function randerDomCommentList(data){
    let commentListEle=document.getElementById("commentList");
    commentListEle.innerHTML="";
    data.forEach(item => {
        let liEle=document.createElement("li");
        liEle.innerHTML=`${item.screen}:${item.text}`;
        commentListEle.appendChild(liEle);
    });
}
function randerPaper(data){
    let topEle=document.getElementById("top");
    topEle.innerHTML="";
    let str=`<div id="title">
            ${data.title}
        </div>
        <div id="author">作者：<span>${data.username}</span></div>
        <div id="typeTime">
            <div id="type">论文类型：<span>${data.texttype}</span></div>
            <div id="time">发表时间：<span>${data.time}</span></div>
        </div>`;
    topEle.innerHTML=str;
    let txtEle=document.getElementById("text");
    txtEle.innerHTML="";
    let str1=`${data.text}`;
    txtEle.innerHTML=str1;
}
function ajaxComment(){
    return new Promise((resove)=>{
        let pid=window.location.search.substring(5);
        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/papercomment.php?pid=${pid}`);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            console.log(data);
            randerDomCommentList(data);
            resove("");
        }
    })
}
function ajaxPaper(){
    return new Promise((resove)=>{
        let pid=window.location.search.substring(5);
        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/papertext.php?pid=${pid}`);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            console.log(data);
            randerPaper(data);
            resove("");
            resove("");
        }
    })
}
async function ajaxPaperData(){
    try{
        let res1=await ajaxPaper();
        console.log(res1);
        let res2=await ajaxComment();
        console.log(res2);
    }catch(error){
        console.log(error);
    }finally{
        console.log("请求完毕")
    }
}
window.onload=function(){
    ajaxPaperData();
}