let searchbtnEle=document.getElementById("top-search-input-searchbtn");
searchbtnEle.onclick=function(){
    let searchinputval = /^[\u4e00-\u9fa5]{1,30}$/;
    let val=document.getElementById("top-search-input").value;
    if(val==""){
        alert("搜索内容不能为空！");
    }else if(!searchinputval.test(val)){
        alert("关键词不合法，请重新输入！（关键词必须是汉字）");
    }else{
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
            console.log(data);
        }
    }
}


