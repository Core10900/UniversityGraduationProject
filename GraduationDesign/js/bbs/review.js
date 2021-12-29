
function ajaxReviewPaper() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/review.php`);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerPaper(data);
            resove("");
        }
    })
}
function ajaxReviewPaperCount() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/reviewcount.php`);
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
async function ReviewPaperList() {
    try {
        let res1 = await ajaxReviewPaper();
        console.log(res1);
        let res2 = await ajaxReviewPaperCount();
        console.log(res2);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("请求完毕");
    }


}

let reviewbtnEle=document.getElementById("review");
reviewbtnEle.onclick=function(){
    p=1;
    ajaxnum=4;
    ReviewPaperList();
}