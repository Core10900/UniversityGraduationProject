function ajaxSearchPaper(val){
    return new Promise((resove)=>{
        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/bbs/search.php?val=${val}`);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            // console.log(data);
            randerPaper(data);
            resove("");
        }
    })
}
function ajaxSearchPaperCount(val){
    return new Promise((resove) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject();
        }
        xhr.open("get", `../php/bbs/searchcount.php?val=${val}`);
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

async function SearchPaperList(val) {
    try {
        let res1 = await ajaxSearchPaper(val);
        console.log(res1);
        let res2 = await ajaxSearchPaperCount(val);
        console.log(res2);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("请求完毕");
    }


}



let searchbtnEle=document.getElementById("top-search-input-searchbtn");
searchbtnEle.onclick=function(){
    let searchinputval = /^[\u4e00-\u9fa5]{1,30}$/;
    let val=document.getElementById("top-search-input").value;
    
    if(val==""){
        alert("搜索内容不能为空！");
    }else if(!searchinputval.test(val)){
        alert("关键词不合法，请重新输入！（关键词必须是汉字）");
    }else{
        
        searchValue=val;
        // console.log(searchValue);
        p=1;
        ajaxnum=0;
        SearchPaperList(searchValue);
    }
}


