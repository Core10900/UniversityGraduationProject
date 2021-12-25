var informationbtn=document.getElementById("information");
informationbtn.onclick=function(){
    let showinformation=document.getElementById("show7");
    showinformation.style.display="block";
    let others=document.querySelectorAll(".show");
    others.forEach((item)=>{
        let showid=item.getAttribute("id");
        if(showid!="show7"){
            item.style.display="none";
        }
    })
    
}