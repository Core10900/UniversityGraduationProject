var searchUserbtn=document.getElementById("searchUser");
searchUserbtn.onclick=function(){
    let showsearchUser=document.getElementById("show3");
    showsearchUser.style.display="block";
    let others=document.querySelectorAll(".show");
    others.forEach((item)=>{
        let showid=item.getAttribute("id");
        if(showid!="show3"){
            item.style.display="none";
        }
    })
}