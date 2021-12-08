var reguser = /^[0-9]{11}$/;
var regpwd = /^[0-9a-zA-Z]{8,14}$/

function CheckPost() {
    if (myfrom.username.value == "") {
        alert("账号不能为空！");
        myfrom.username.focus();
        return false;
    } else if (!reguser.test(myfrom.username.value)) {
        alert("账号必须是11位纯数字！");
        myfrom.username.focus();
        return false;

    } else if (myfrom.pwd.value == "") {
        alert("密码不能为空！");
        myfrom.pwd.focus();
        return false;
    } else if (!regpwd.test(myfrom.pwd.value)) {
        alert("密码必须是8-14位纯数字或纯字母或数字+字母的组合！");
        myfrom.pwd.focus();
        return false;
    } else {
        return true;
    }
}