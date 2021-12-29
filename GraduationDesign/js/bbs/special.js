function ajaxSpecialPaper() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/special.php`);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerPaper(data);
            resove("");
        }
    })
}
function ajaxSpecialPaperCount() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/specialcount.php`);
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
async function SpecialPaperList() {
    try {
        let res1 = await ajaxSpecialPaper();
        console.log(res1);
        let res2 = await ajaxSpecialPaperCount();
        console.log(res2);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("请求完毕");
    }


}


let specialbtnEle = document.getElementById("special");
specialbtnEle.onclick = function () {
    p = 1;
    ajaxnum = 2;
    SpecialPaperList();
}