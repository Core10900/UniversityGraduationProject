var securitybtn=document.getElementById("security");
securitybtn.onclick=function(){
    let showsecurity=document.getElementById("show6");
    showsecurity.style.display="block";
    let others=document.querySelectorAll(".show");
    others.forEach((item)=>{
        let showid=item.getAttribute("id");
        if(showid!="show6"){
            item.style.display="none";
        }
    })
}