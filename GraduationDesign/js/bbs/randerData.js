let p = 1;
let page;
let ajaxnum = 1;
//请求ajax数据类型 0搜索论文 1全部论文 2专题论文 3论辩论文 4综述论文 5综合论文
let searchValue;
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
function randerPaperPages(p, page) {
    if (page == 0) {
        page = 1;
    }
    let pagesEle = document.getElementById("pages");
    pagesEle.innerHTML = "";
    pagesEle.innerHTML = `${p}/${page}`;
}
// async function initPaperList(){
//     try{
//         let res1=await 
//     }
// }
function randerPaperBtn(ajaxnum, p) {
    return new Promise((resove) => {
        if (ajaxnum = 0) {
            let xhr;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else {
                xhr = new ActiveXObject();
            }
            xhr.open("get", `../php/bbs/search.php?val=${searchValue}&p=${p}`);
            xhr.send();
            xhr.onload = function () {
                let data = JSON.parse(xhr.responseText);
                console.log(data);
            }
        }
    })
}
