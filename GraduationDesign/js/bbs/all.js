function ajaxAllPaper() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/all.php`);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerPaper(data);
            resove("");
        }
    })
}
function ajaxAllPaperCount() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/allcount.php`);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            page=Math.ceil(Number(data.c)/7);
            // console.log(page);
            randerPaperPages(p,page);
            resove("");
        }
    })
}
async function initPaperList() {
    try {
        let res1 = await ajaxAllPaperCount();
        console.log(res1);
        let res2 = await ajaxAllPaper();
        console.log(res2);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("请求完毕");
    }


}


let allbtnEle = document.getElementById("all");
console.log(allbtnEle);
allbtnEle.onclick = function () {
    ajaxnum = 1;
    p=1;
    initPaperList();

}
window.onload=function(){
    ajaxnum = 1;
    p=1;
    initPaperList();
}
