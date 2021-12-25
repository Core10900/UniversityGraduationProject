window.onload=function(){
    let hashstr=window.location.hash;
    // console.log(hashstr);
    if(hashstr=="#1"){
        setTimeout(()=>{
            alert("欢迎登录中国高校教师学术论坛网！");
        },500)
        
        let searchstr=decodeURI(window.location.search);
        // console.log(searchstr);
        let res=searchstr.substring(4);
        res=res.replace('"',"");
        let rid=Number(res.replace('"',""));
        // console.log(rid);
        sessionStorage.setItem("rid",rid);
    }
}