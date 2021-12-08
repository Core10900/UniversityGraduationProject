var regpwd = /^[0-9a-zA-Z]{8,14}$/
var username = /^[\u4e00-\u9fa5]{2,4}$/;


function CheckPost() {
    if (myfrom.pwd1.value == "") {
        alert("密码不能为空！");
        myfrom.pwd1.focus();
        return false;
    } else if (myfrom.pwd2.value == "") {
        alert("密码不能为空！");
        myfrom.pwd2.focus();
        return false;
    } else if (myfrom.name.value == "") {
        alert("姓名不能为空！");
        myfrom.name.focus();
        return false;
    } else if (!regpwd.test(myfrom.pwd1.value)) {
        alert("密码必须是8-14位纯数字或纯字母或数字+字母的组合！");
        myfrom.pwd1.focus();
        return false;
    } else if (!regpwd.test(myfrom.pwd2.value)) {
        alert("密码必须是8-14位纯数字或纯字母或数字+字母的组合！");
        myfrom.pwd2.focus();
        return false;
    } else if (myfrom.pwd1.value != myfrom.pwd2.value) {
        alert("两次密码不一致!");
        myfrom.pwd2.focus();
        return false;
    } else if (!username.test(myfrom.name.value)) {
        alert("输入的姓名格式不合法！姓名必须是2-4位汉字");
        myfrom.name.focus();
        return false;
    } else {
        return true;
    }
}