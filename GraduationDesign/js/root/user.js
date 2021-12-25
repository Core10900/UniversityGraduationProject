var userbtn=document.getElementById("user");
userbtn.onclick=function(){
    let showUser=document.getElementById("show2");
    showUser.style.display="block";
    let others=document.querySelectorAll(".show");
    others.forEach((item)=>{
        let showid=item.getAttribute("id");
        if(showid!="show2"){
            item.style.display="none";
        }
    })
}