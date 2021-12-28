
function randerDomNew(data){
    let titleEle=document.getElementById("title");
    titleEle.innerHTML="";
    let str1=`<div id="text-title">${data.title}</div>
    <div id="text-time">${data.time}</div>`;
    titleEle.innerHTML=str1;
    let newEle=document.getElementById("new");
    newEle.innerHTML="";
    let str=`${data.text}`;
    newEle.innerHTML=str;
}
function ajaxPaperData(newid){
    return new Promise((resove)=>{
        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/new.php?newid=${newid}`,true);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            console.log(data);
            randerDomNew(data);
            resove("");
        }
    })
}

let newid=Number(window.location.search.substring(7));
console.log(newid);
ajaxPaperData(newid);