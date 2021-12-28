let p = 1;
let page;
function randerPaper(data) {
    let paperDataEle = document.getElementById("paperData");
    paperDataEle.innerHTML = "";
    data.forEach(item => {
        let divEle = document.createElement("div");
        divEle.className = 'dataPlate';
        let str = `<div class="paperTitleType">
                <a href="./paper.html?pid=${Number(item.pid)}" target="_blank" class="paperTitle">${item.title}</a>
                <div class="paperTime">${item.texttype}</div>
            </div>
            <div class="paperNameTime">
                <div class="name">作者：<span class="author">${item.username}</span></div>
                <div class="time">${item.time}</div>
            </div>`;
        divEle.innerHTML = str;
        paperDataEle.appendChild(divEle);
    });
}
function randerPaperPages(p,page){
    if(page==0){
        page=1;
    }
    let pagesEle=document.getElementById("pages");
    pagesEle.innerHTML="";
    pagesEle.innerHTML=`${p}/${page}`;
}