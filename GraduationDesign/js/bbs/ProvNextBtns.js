function ajaxAllPaperBtns(p,page){
    return new Promise((resove)=>{
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/all.php?p=${p}`);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerPaper(data);
            randerPaperPages(p, page);
            resove("");
        }
    })
}
function ajaxSpecialPaperBtns(p,page){
    return new Promise((resove)=>{
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/special.php?p=${p}`);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerPaper(data);
            randerPaperPages(p, page);
            resove("");
        }
    })
}

function ajaxDebatePaperBtns(p,page){
    return new Promise((resove)=>{
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/debate.php?p=${p}`);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerPaper(data);
            randerPaperPages(p, page);
            resove("");
        }
    })
}
function ajaxReviewPaperBtns(p,page){
    return new Promise((resove)=>{
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/review.php?p=${p}`);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerPaper(data);
            randerPaperPages(p, page);
            resove("");
        }
    })
}
function ajaxSynthesizePaperBtns(p,page){
    return new Promise((resove)=>{
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/synthesize.php?p=${p}`);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerPaper(data);
            randerPaperPages(p, page);
            resove("");
        }
    })
}
function ajaxSearchPaperBtns(p,page,val){
    return new Promise((resove)=>{
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/search.php?p=${p}&val=${val}`);
        xhr.send();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            // console.log(data);
            randerPaper(data);
            randerPaperPages(p, page);
            resove("");
        }
    })
}


let provBtnEle=document.getElementById("prov");
provBtnEle.onclick=function(){
    if(p==1){

    }else{
        --p;
        if(ajaxnum==1){
            ajaxAllPaperBtns(p,page);
        }else if(ajaxnum==2){
            ajaxSpecialPaperBtns(p,page);
        }else if(ajaxnum==3){
            ajaxDebatePaperBtns(p,page);
        }else if(ajaxnum==4){
            ajaxReviewPaperBtns(p,page);
        }else if(ajaxnum==5){
            ajaxSynthesizePaperBtns(p,page);
        }else if(ajaxnum==0){
            ajaxSearchPaperBtns(p,page,searchValue);
        }
    }
    
}
let nextBtnEle=document.getElementById("next");
nextBtnEle.onclick=function(){
    if(p==page){

    }else{
        ++p;
        if(ajaxnum==1){
            ajaxAllPaperBtns(p,page);
        }else if(ajaxnum==2){
            ajaxSpecialPaperBtns(p,page);
        }else if(ajaxnum==3){
            ajaxDebatePaperBtns(p,page);
        }else if(ajaxnum==4){
            ajaxReviewPaperBtns(p,page);
        }else if(ajaxnum==5){
            ajaxSynthesizePaperBtns(p,page);
        }else if(ajaxnum==0){
            ajaxSearchPaperBtns(p,page,searchValue);
        }
    }
    
}