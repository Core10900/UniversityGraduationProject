let amendEle=document.getElementById("amend");
amendEle.onclick=function(){
    let showEles=document.querySelectorAll(".show");
    showEles.forEach((item)=>{
        let id=item.getAttribute('id');
        if(id=="show2"){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    })
}


/*
function UserPost() {
    let regschool = /(^[\u4e00-\u9fa5]{2,10}学院$)||(^[\u4e00-\u9fa5]{2,10}大学$)/;
    let regname = /^[\u4e00-\u9fa5]{1,6}$/;
    if (userfrom.ameschool.value == "") {
        alert("学校名称不能为空！");
        userfrom.ameschool.focus();
        return false;
    } else if (!regschool.test(userfrom.ameschool.value)) {
        alert("学校名称必须以学院或大学结尾，名称长度不能超过12个字符或小于4个字符！");
        userfrom.ameschool.focus();
        return false;

    } else if (userfrom.amescreen.value == "") {
        alert("网名不能为空！");
        userfrom.amescreen.focus();
        return false;
    } else if (!regname.test(userfrom.amescreen.value)) {
        alert("网名必须是1到6位汉字！");
        userfrom.amescreen.focus();
        return false;
    } else {
        return true;
    }
}*/
let amendsubEle=document.getElementById("sub");
amendsubEle.onclick=function(){
    let schoolval=document.getElementById("ameschool").value;
    let screenval=document.getElementById("amescreen").value;
    let regschool = /(^[\u4e00-\u9fa5]{2,10}学院$)||(^[\u4e00-\u9fa5]{2,10}大学$)/;
    let regname = /^[\u4e00-\u9fa5]{1,6}$/;
    if(schoolval==""){
        alert("学校名称不能为空！");
    }else if(!regschool.test(schoolval)){
        alert("学校名称必须以学院或大学结尾，名称长度不能超过12个字符或小于4个字符！");
    }else if(screenval==""){
        alert("网名不能为空！");
    }else if(!regname.test(screenval)){
        alert("网名必须是1到6位汉字！");
    }else{
        let cookieres = document.cookie;
        let cookiearr = cookieres.split(";");
        let uid = cookiearr[0].split("=");
        uid = Number(uid[1]);
        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("get",`../php/user/amend.php?uid=${uid}&school=${schoolval}&screen=${screenval}`);
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            console.log(data);
            if(data[0]==1){
                alert("修改成功！");
                location.reload(true);
            }else{
                alert("修改失败！请重新登录！");
            }
        }
        xhr.send();

    }

}