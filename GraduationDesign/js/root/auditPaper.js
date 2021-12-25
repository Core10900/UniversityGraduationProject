var auditPaperbtn=document.getElementById("auditPaper");
auditPaperbtn.onclick=function(){
    let showauditPaper=document.getElementById("show5");
    showauditPaper.style.display="block";
    let others=document.querySelectorAll(".show");
    others.forEach((item)=>{
        let showid=item.getAttribute("id");
        if(showid!="show5"){
            item.style.display="none";
        }
    })
}