function ajaxDebatePaper() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/debate.php`);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerPaper(data);
            resove("");
        }
    })
}
function ajaxDebatePaperCount() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/debatecount.php`);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            page = Math.ceil(Number(data.c) / 7);
            // console.log(page);
            randerPaperPages(p, page);
            resove("");
        }
    })
}
async function DebatePaperList() {
    try {
        let res1 = await ajaxDebatePaper();
        console.log(res1);
        let res2 = await ajaxDebatePaperCount();
        console.log(res2);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("请求完毕");
    }


}



let debatebtnEle=document.getElementById("debate");
debatebtnEle.onclick=function(){
    p=1;
    ajaxnum=3;
    DebatePaperList();
}