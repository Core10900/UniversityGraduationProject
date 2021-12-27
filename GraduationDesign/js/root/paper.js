var paperP=1;
var paperPage;

function randerPaper(data){
    let paperdataEle=document.getElementById("paperdata");
    paperdataEle.innerHTML="";
    data.forEach((item)=>{
        let divElepa=document.createElement("div");
        divElepa.className="data";
        divElepa.innerHTML=`<div class="paperauthor">${item.username}</div>
        <a href="./paper.html?pid=${Number(item.pid)}" class="papertitle" target="_blank">${item.title}</a>
        <button class="paperdel" id="${Number(item.pid)}">删除</button>`;
        paperdataEle.appendChild(divElepa);
    })
    
   
}
function randerPaperPage(p,page){
    let paperpagesEle=document.getElementById("paperpages");
    paperpagesEle.innerHTML="";
    paperpagesEle.innerHTML=`${p}/${page}`;
}
function ajaxPaperData(){
    return new Promise((resove)=>{
        $.ajax({
            type: "get",
            url: `../php/root/paperdata.php`,
            success: function (data) {
                console.log(JSON.parse(data));
                let res=JSON.parse(data);
                randerPaper(res);
                // resove("");
                // randerNewlist(JSON.parse(data));
                // console.log(p);
                resove("");
                
            }
        })
    })
}
function ajaxPaperDataCount(){
    return new Promise((resove)=>{
        $.ajax({
            type: "get",
            url: `../php/root/paperdatacount.php`,
            success: function (data) {
                console.log(JSON.parse(data));
                let rse=JSON.parse(data);
                let res=Number(rse.c);
                console.log(res);
                paperPage=Math.ceil(res/9);
                randerPaperPage(paperP,paperPage);
                // resove("");
                // randerNewlist(JSON.parse(data));
                // console.log(p);
                resove("");
                
            }
        })
    })
}
function ajaxPaperDataBtn(p){
    return new Promise((resove)=>{
        $.ajax({
            type: "get",
            url: `../php/root/paperdata.php?p=${p}`,
            success: function (data) {
                console.log(JSON.parse(data));
                let res=JSON.parse(data);
                console.log(res.length);
                randerPaper(res);
                randerPaperPage(p,paperPage);
                // resove("");
                // randerNewlist(JSON.parse(data));
                // console.log(p);
                resove("");
                
            }
        })
    })
}
async function ajaxInitPaperData(){
    try{
        let res1=await ajaxPaperData();
        console.log(res1);
        let res2=await ajaxPaperDataCount();
        console.log(res2);
    }catch(error){
        console.log(error);
    }finally{
        console.log("数据请求完毕");
    }
}
let paperprovbtnEle=document.getElementById("paperprovbtn");
paperprovbtnEle.onclick=function(){
    if(paperP==1){

    }else{
        --paperP;
        ajaxPaperDataBtn(paperP);
    }
    
}
let papernextbtnEle=document.getElementById("papernextbtn");
papernextbtnEle.onclick=function(){
    if(paperPage==paperP){

    }else{
        ++paperP;
        ajaxPaperDataBtn(paperP);
    }
    

}

var paperbtn=document.getElementById("paper");
paperbtn.onclick=function(){
    let showPaper=document.getElementById("show4");
    showPaper.style.display="block";
    let others=document.querySelectorAll(".show");
    others.forEach((item)=>{
        let showid=item.getAttribute("id");
        if(showid!="show4"){
            item.style.display="none";
        }
    })
    ajaxInitPaperData();
}
