var auditpaperP=1;
var auditpaperPage;

function AuditPaperDelFn(){
    let paperAuditBtnEle=document.querySelectorAll(".auditpaperdel");
    // console.log(paperDeleteBtnEle);
    paperAuditBtnEle.forEach((item)=>{
        item.onclick=function(){
            let pid=Number(item.getAttribute("id"));
            // console.log(pid);
            ajaxAuditPaperDataDel(pid)
        }
    })
}

function randerAuditPaper(data){
    let auditpaperdataEle=document.getElementById("auditpaperdata");
    auditpaperdataEle.innerHTML="";
    data.forEach((item)=>{
        let auditdivElepa=document.createElement("div");
        auditdivElepa.className="auditdata";
        auditdivElepa.innerHTML=`<div class="auditpaperauthor">${item.username}</div>
        <a href="./auditpaper.html?pid=${Number(item.pid)}" class="auditpapertitle" target="_blank">${item.title}</a>
        <button class="auditpaperdel" id="${Number(item.pid)}">通过</button>`;
        auditpaperdataEle.appendChild(auditdivElepa);
    })
    AuditPaperDelFn()
   
}
function randerAuditPaperPage(p,page){
    let auditpaperpagesEle=document.getElementById("auditpaperpages");
    auditpaperpagesEle.innerHTML="";
    if(page==0){
        page=1;
    }
    auditpaperpagesEle.innerHTML=`${p}/${page}`;
}

function ajaxAuditPaperData(){
    return new Promise((resove)=>{
        $.ajax({
            type: "get",
            url: `../php/root/auditpaperdata.php`,
            success: function (data) {
                console.log(JSON.parse(data));
                let res=JSON.parse(data);
                randerAuditPaper(res);
                // resove("");
                // randerNewlist(JSON.parse(data));
                // console.log(p);
                resove("");
                
            }
        })
    })
}

function ajaxAuditPaperDataCount(){
    return new Promise((resove)=>{
        $.ajax({
            type: "get",
            url: `../php/root/auditpaperdatacount.php`,
            success: function (data) {
                console.log(JSON.parse(data));
                let rse=JSON.parse(data);
                let res=Number(rse.c);
                console.log(res);
                auditpaperPage=Math.ceil(res/9);
                randerAuditPaperPage(auditpaperP,auditpaperPage);
                // resove("");
                // randerNewlist(JSON.parse(data));
                // console.log(p);
                resove("");
                
            }
        })
    })
}
function ajaxAuditPaperDataDel(pid){
    return new Promise((resove)=>{
        $.ajax({
            type: "get",
            url: `../php/root/auditpaperdatadel.php?pid=${pid}`,
            success: function (data) {
                let arr=JSON.parse(data);
                if(arr[0]==2){
                    alert("操作成功！");
                    ajaxInitAuditPaperData();
                }
                resove("");
                
            }
        })
    })
}
function ajaxAuditPaperDataBtn(p){
    return new Promise((resove)=>{
        $.ajax({
            type: "get",
            url: `../php/root/auditpaperdata.php?p=${p}`,
            success: function (data) {
                console.log(JSON.parse(data));
                let res=JSON.parse(data);
                // console.log(res.length);
                randerAuditPaper(res);
                randerAuditPaperPage(p,auditpaperPage);
                // resove("");
                // randerNewlist(JSON.parse(data));
                // console.log(p);
                resove("");
                
            }
        })
    })
}
async function ajaxInitAuditPaperData(){
    auditpaperP=1;
    try{
        let res1=await ajaxAuditPaperData();
        console.log(res1);
        let res2=await ajaxAuditPaperDataCount();
        console.log(res2);
    }catch(error){
        console.log(error);
    }finally{
        console.log("数据请求完毕");
    }
}

let auditpaperprovbtnEle=document.getElementById("auditpaperprovbtn");
auditpaperprovbtnEle.onclick=function(){
    if(auditpaperP==1){

    }else{
        --auditpaperP;
        ajaxAuditPaperDataBtn(auditpaperP);
    }
    
}
let auditpapernextbtnEle=document.getElementById("auditpapernextbtn");
auditpapernextbtnEle.onclick=function(){
    if(auditpaperPage==auditpaperP){

    }else{
        ++auditpaperP;
        ajaxAuditPaperDataBtn(auditpaperP);
    }
    

}

var auditPaperbtn=document.getElementById("auditPaper");
auditPaperbtn.onclick=function(){
    let showauditPaper=document.getElementById("show5");
    showauditPaper.style.display="block";
    let others=document.querySelectorAll(".show");
    others.forEach((item)=>{
        let showid=item.getAttribute("id");
        if(showid!="show5"){
            item.style.display="none";
        }
    })
    ajaxInitAuditPaperData();
}