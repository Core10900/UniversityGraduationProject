var paperbtn=document.getElementById("paper");
paperbtn.onclick=function(){
    let showPaper=document.getElementById("show4");
    showPaper.style.display="block";
    let others=document.querySelectorAll(".show");
    others.forEach((item)=>{
        let showid=item.getAttribute("id");
        if(showid!="show4"){
            item.style.display="none";
        }
    })
}