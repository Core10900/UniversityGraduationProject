let pwdEle=document.getElementById("pwd");
pwdEle.onclick=function(){
    let showEles=document.querySelectorAll(".show");
    showEles.forEach((item)=>{
        let id=item.getAttribute('id');
        if(id=="show3"){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    })
}
/*
function CheckPostPwd(){
    let regpwd = /^[0-9a-zA-Z]{8,14}$/;
    let pwd1=document.getElementById("newrootpwd").value;
    let pwd2=document.getElementById("newrootpwd1").value;
    if(pwd1==""||pwd2==""){
        alert("密码不能为空");
        myfromroot.newrootpwd.focus();
        return false;
    }else if(pwd1!=pwd2){
        alert("两次密码不一致！");
        myfromroot.newrootpwd.focus();
        return false;
    }else if(!regpwd.test(pwd1)){
        alert("新密码不符合格式要求！（8-14位数字、字母或数字+字母的组合）");
        myfromroot.newrootpwd.focus();
        return false;
    }else if(!regpwd.test(pwd2)){
        alert("确认密码不符合格式要求！（8-14位数字、字母或数字+字母的组合）");
        myfromroot.newrootpwd1.focus();
        return false;
    }

}*/
let subpwdbtn=document.getElementById("subpwd");
subpwdbtn.onclick=function(){
    let userpwd=document.getElementById("newrootpwd").value;
    let userpwd1=document.getElementById("newrootpwd1").value;
    
    
    let reguserpwd = /^[0-9a-zA-Z]{8,14}$/;
    if(userpwd==""||userpwd1==""){
        alert("密码不能为空！");
    }else if(userpwd1!=userpwd){
        alert("两次密码不一致！");
    }else if(!reguserpwd.test(userpwd)){
        alert("密码必须是8-14位纯数字或纯字母或数字+字母的组合！");
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
        xhr.open("get",`../php/user/userpwd.php?uid=${uid}&pwd=${userpwd}`);
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