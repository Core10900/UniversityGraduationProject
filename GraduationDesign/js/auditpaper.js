function randerDomAuditPaper(data){
    let titleEle=document.getElementById("title");
    titleEle.innerHTML="";
    let str1=`<div id="text-title">${data.title}</div>
    <div id="text-type">论文类型：<span>${data.texttype}</span></div>
    <div id="text-author">${data.username}</div>
    <div id="text-time">${data.time}</div>`;
    titleEle.innerHTML=str1;
    let paperEle=document.getElementById("paper");
    paperEle.innerHTML="";
    let str2=`${data.text}`;
    paperEle.innerHTML=str2;
}

function ajaxPaperData(pid){
    return new Promise((resove)=>{
        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/auditpaper.php?pid=${pid}`,true);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            console.log(data);
            randerDomAuditPaper(data)
            resove("");
        }
    })
}
let pid=Number(window.location.search.substring(5));
console.log(pid);
ajaxPaperData(pid);