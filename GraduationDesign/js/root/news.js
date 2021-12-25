var newsbtn=document.getElementById("news");
newsbtn.onclick=function(){
    let showNews=document.getElementById("show1");
    showNews.style.display="block";
    let others=document.querySelectorAll(".show");
    others.forEach((item)=>{
        let showid=item.getAttribute("id");
        if(showid!="show1"){
            item.style.display="none";
        }
    })
}