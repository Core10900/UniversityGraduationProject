function ajaxSynthesizePaper() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/synthesize.php`);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerPaper(data);
            resove("");
        }
    })
}
function ajaxSynthesizePaperCount() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/synthesizecount.php`);
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
async function SynthesizePaperList() {
    try {
        let res1 = await ajaxSynthesizePaper();
        console.log(res1);
        let res2 = await ajaxSynthesizePaperCount();
        console.log(res2);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("请求完毕");
    }


}


let synthesizebtnEle=document.getElementById("synthesize");
synthesizebtnEle.onclick=function(){
    p=1;
    ajaxnum=5;
    SynthesizePaperList();
}