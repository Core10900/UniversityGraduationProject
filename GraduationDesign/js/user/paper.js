let paperP=1;
let paperPage;


let paperEle=document.getElementById("paper");
paperEle.onclick=function(){
    let showEles=document.querySelectorAll(".show");
    showEles.forEach((item)=>{
        let id=item.getAttribute('id');
        if(id=="show4"){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    })
    initUserPaperData();
}
function randerDomUserPaper(data){
    let paperEle=document.getElementById("paperplate");
    paperEle.innerHTML="";
    data.forEach(function(item){
        let divEle=document.createElement("div");
        divEle.className="plate";
        let str=`<a href="./paper.html?pid=${Number(item.pid)}" target="_blank">${item.title}</a>
        <div class="paper-tim">${item.time}</div>`;
        divEle.innerHTML=str;
        paperEle.appendChild(divEle);
    })
}
function randerDomUserPaperPages(p,page){
    if(page==0){
        page=1;
    }
    let pagesEle=document.getElementById("pages");
    pagesEle.innerHTML="";
    let str=`${p}/${page}`;
    pagesEle.innerHTML=str;
}
function ajaxUserPaper(){
    return new Promise((resove)=>{
        let cookieres = document.cookie;
        let cookiearr = cookieres.split(";");
        let uid = cookiearr[0].split("=");
        uid = Number(uid[1]);

        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/user/userpaper.php?uid=${uid}`);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            console.log(data);
            randerDomUserPaper(data);
            resove("");
        }
    })
}
function ajaxUserPaperBtn(p){
    return new Promise((resove)=>{
        let cookieres = document.cookie;
        let cookiearr = cookieres.split(";");
        let uid = cookiearr[0].split("=");
        uid = Number(uid[1]);

        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/user/userpaper.php?uid=${uid}&p=${p}`);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            console.log(data);
            randerDomUserPaper(data);
            randerDomUserPaperPages(p,paperPage);
            resove("");
        }
    })
}

function ajaxUserPaperCount(){
    return new Promise((resove)=>{
        let cookieres = document.cookie;
        let cookiearr = cookieres.split(";");
        let uid = cookiearr[0].split("=");
        uid = Number(uid[1]);

        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/user/userpapercount.php?uid=${uid}`);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            console.log(data);
            paperPage=Math.ceil(Number(data['c'])/6);
            console.log(paperPage);
            randerDomUserPaperPages(paperP,paperPage);
            resove("");
        }
    })
}
async function initUserPaperData(){
    try{
        let res1=await ajaxUserPaper();
        console.log(res1);
        let res2=await ajaxUserPaperCount();
        console.log(res2);
    }catch(error){
        console.log(error);
    }finally{
        console.log("请求完毕");
    }
}
let provbtnEle=document.getElementById("provbtn");
provbtnEle.onclick=function(){
    if(paperP==1){

    }else{
        --paperP;
        ajaxUserPaperBtn(paperP)
    }
}
let nextbtnEle=document.getElementById("nextbtn");
nextbtnEle.onclick=function(){
    if(paperP==paperPage){

    }else{
        ++paperP;
        ajaxUserPaperBtn(paperP)
    }
}