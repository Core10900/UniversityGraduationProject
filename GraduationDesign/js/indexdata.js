function randerDomNew3(data) {
    let ajaxNew3Ele = document.getElementById("ajaxNew3");
    ajaxNew3Ele.innerHTML = "";
    let id1 = Number(data[0].id);
    let id2 = Number(data[1].id);
    let id3 = Number(data[2].id);
    str = `<div class="newVideo">
        <a href="./news.html?newid=${id1}" target="_blank"><img src="../images/index/Education1.png" alt=""></a>
        <ul>
            <li><a href="./news.html?newid=${id1}" target="_blank"><span>一、</span>${data[0].title}</a></li>
        </ul>
    </div>
    <div class="newVideo">
        <a href="./news.html?newid=${id2}" target="_blank"><img src="../images/index/Education2.png" alt=""></a>
        <ul>
            <li><a href="./news.html?newid=${id2}" target="_blank"><span>二、</span>${data[1].title}</a></li>
        </ul>
    </div>
    <div class="newVideo">
        <a href="./news.html?newid=${id3}" target="_blank"><img src="../images/index/Education3.png" alt=""></a>
        <ul>
            <li><a href="./news.html?newid=${id3}" target="_blank"><span>三、</span>${data[2].title}</a></li>
        </ul>
    </div>`;
    ajaxNew3Ele.innerHTML = str;
}
function randerDomNew7(data){
    let ajaxNew7Ele=document.getElementById("ajaxNew7");
    ajaxNew7Ele.innerHTML="";
    let id4=Number(data[0].id);
    let id5=Number(data[1].id);
    let id6=Number(data[2].id);
    let id7=Number(data[3].id);
    let id8=Number(data[4].id);
    let id9=Number(data[5].id);
    let id10=Number(data[6].id);
    str=`<li><a href="./news.html?newid=${id4}" target="_blank"><span>四、</span>${data[0].title}</a></li>
    <li><a href="./news.html?newid=${id5}" target="_blank"><span>五、</span>${data[1].title}</a></li>
    <li><a href="./news.html?newid=${id6}" target="_blank"><span>六、</span>${data[2].title}</a></li>
    <li><a href="./news.html?newid=${id7}" target="_blank"><span>七、</span>${data[3].title}</a></li>
    <li><a href="./news.html?newid=${id8}" target="_blank"><span>八、</span>${data[4].title}</a></li>
    <li><a href="./news.html?newid=${id9}" target="_blank"><span>九、</span>${data[5].title}</a></li>
    <li><a href="./news.html?newid=${id10}" target="_blank"><span>十、</span>${data[6].title}</a></li>`;
    ajaxNew7Ele.innerHTML=str;
}
function randerDomPaperSpecial(data){
    let id0=Number(data[0].pid);
    let id1=Number(data[1].pid);
    let id2=Number(data[2].pid);
    let computerEle=document.getElementById("computer");
    computerEle.innerHTML="";
    let str=`<p id="title"><span>专题论文</span><a href="./bbs.html" target="_blank">进入论坛>></a></p>
    <div class="plate">
        <a href="./paper.html?pid=${id0}" target="_blank">
            <img src="../images/index/academic4.png" alt="">
            <p class="txt-title">${data[0].title}</p>
            <p class="txt">${data[0].txt}</p>
        </a>
    </div>
    <div class="plate">
        <a href="./paper.html?pid=${id1}" target="_blank">
            <img src="../images/index/academic2.png" alt="">
            <p class="txt-title">${data[1].title}</p>
            <p class="txt">${data[1].txt}</p>
        </a>

    </div>
    <div class="plate" style="margin-right: none;">
        <a href="./paper.html?pid=${id2}" target="_blank">
            <img src="../images/index/academic1.png" alt="">
            <p class="txt-title">${data[2].title}</p>
            <p class="txt">${data[2].txt}</p>
        </a>
    </div>`;
    computerEle.innerHTML=str;

}
function randerDomPaperDebate(data){
    let dryEle=document.getElementById("dry");
    dryEle.innerHTML="";
    let pid0=Number(data[0].pid);
    let pid1=Number(data[1].pid);
    let pid2=Number(data[2].pid);
    let str=`<p id="title"><span>论辩论文</span><a href="./bbs.html" target="_blank">进入论坛>></a></p>
    <div class="plate" style="margin-top: 32px;background-image: url(../images/index/plate-a\ \(1\).gif);background-position: right top;background-repeat: no-repeat;">
        <a href="./paper.html?pid=${pid0}" target="_blank">
            <div class="img">
                <img src="../images/index/sub.png" alt="" class="png">
            </div>
            <div class="txt">
                <p class="title">${data[0].title}</p>
                <p class="author"><span>作者：</span><span class="authorName">${data[0].username}</span></p>
                <p class="text">${data[0].txt}</p>
            </div>
        </a> 
    </div>
    <div class="plate" style="margin-top: 32px;background-image: url(../images/index/plate-a\ \(2\).gif);background-position: right top;background-repeat: no-repeat;">
        <a href="./paper.html?pid=${pid1}" target="_blank">
            <div class="img">
                <img src="../images/index/sub1.png" alt="" class="png">
            </div>
            <div class="txt">
                <p class="title">${data[1].title}</p>
                <p class="author"><span>作者：</span><span class="authorName">${data[1].username}</span></p>
                <p class="text">${data[1].txt}</p>
            </div>
        </a>
    </div>
    <div class="plate" style="margin-top: 32px;background-image: url(../images/index/plate-a\ \(3\).gif);background-position: right top;background-repeat: no-repeat;">
        <a href="./paper.html?pid=${pid2}" target="_blank">
            <div class="img">
                <img src="../images/index/subject.png" alt="" class="png">
            </div>
            <div class="txt">
                <p class="title">${data[2].title}</p>
                <p class="author"><span>作者：</span><span class="authorName">${data[2].username}</span></p>
                <p class="text">${data[2].txt}</p>
            </div>
        </a>  
    </div>`;
    dryEle.innerHTML=str;
}
function randerDomPaperSynthesize(data){
    let activityEle=document.getElementById("activity");
    activityEle.innerHTML="";
    let pid1=data[0].pid;
    let pid2=data[1].pid;
    let str=`<p id="title"><span>综合论文</span><a href="./bbs.html" target="_blank">进入论坛>></a></p>
    <div class="plate" style="margin-top: 32px;background-image: url(../images/index/plate-a\ \(3\).gif);background-position: right top;background-repeat: no-repeat;">
        <a href="./paper.html?pid=${pid1}" target="_blank">
            <div class="img">
                <img src="../images/index/subject1.png" alt="" class="png">
            </div>
            <div class="txt">
                <p class="title">${data[0].title}</p>
                <p class="author"><span>作者：</span><span class="authorName">${data[0].username}</span></p>
                <p class="text">${data[0].txt}</p>
            </div>
        </a> 
    </div>
    <div class="plate" style="margin-top: 32px;background-image: url(../images/index/plate-a\ \(2\).gif);background-position: right top;background-repeat: no-repeat;">
        <a href="./paper.html?pid=${pid2}" target="_blank">
            <div class="img">
                <img src="../images/index/subject2.png" alt="" class="png">
            </div>
            <div class="txt">
                <p class="title">${data[1].title}</p>
                <p class="author"><span>作者：</span><span class="authorName">${data[1].username}</span></p>
                <p class="text">${data[1].txt}</p>
            </div>
        </a>
    </div>`;
    activityEle.innerHTML=str;
}
function ajaxNew3() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", "../php/index/new3.php", true);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerDomNew3(data);
            resove("热点新闻3请求完毕");
        }
    })

}
function ajaxNew7() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", "../php/index/new7.php", true);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerDomNew7(data)
            resove("热点新闻7请求完毕");
        }
    })

}
function ajaxPaperSpecial() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", "../php/index/PaperSpecial.php", true);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerDomPaperSpecial(data);
            resove("专题论文请求完毕");
        }
    })

}
function ajaxPaperDebate() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", "../php/index/PaperDebate.php", true);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerDomPaperDebate(data);
            resove("论辩论文请求完毕");
        }
    })

}
function ajaxPaperSynthesize() {
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", "../php/index/PaperSynthesize.php", true);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerDomPaperSynthesize(data);
            resove("综合论文请求完毕");
        }
    })

}
async function indexDatas() {
    try {
        let res0 = await ajaxNew3();
        console.log(res0);
        let res2 = await ajaxPaperSpecial();
        console.log(res2);
        let res1 = await ajaxNew7();
        console.log(res1);
        let res3 = await ajaxPaperDebate();
        console.log(res3);
        let res4 = await ajaxPaperSynthesize();
        console.log(res4);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("数据请求完毕");
    }
}
$(document).ready(indexDatas());