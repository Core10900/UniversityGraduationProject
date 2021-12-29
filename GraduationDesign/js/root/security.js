var securitybtn = document.getElementById("security");
securitybtn.onclick = function () {
    let showsecurity = document.getElementById("show6");
    showsecurity.style.display = "block";
    let others = document.querySelectorAll(".show");
    others.forEach((item) => {
        let showid = item.getAttribute("id");
        if (showid != "show6") {
            item.style.display = "none";
        }
    })
}
function CheckPostPwd() {
    let rootcookieids = document.getElementById("rootcookieids");
    let searchstr = decodeURI(window.location.search);
    // console.log(searchstr);
    let res = searchstr.substring(4);
    res = res.replace('"', "");
    let rid = Number(res.replace('"', ""));
    rootcookieids.value = rid;
    let regpwd = /^[0-9a-zA-Z]{8,14}$/;
    let pwd1 = document.getElementById("newrootpwd").value;
    let pwd2 = document.getElementById("newrootpwd1").value;
    if (pwd1 == "" || pwd2 == "") {
        alert("密码不能为空");
        myfromroot.newrootpwd.focus();
        return false;
    } else if (pwd1 != pwd2) {
        alert("两次密码不一致！");
        myfromroot.newrootpwd.focus();
        return false;
    } else if (!regpwd.test(pwd1)) {
        alert("新密码不符合格式要求！（8-14位数字、字母或数字+字母的组合）");
        myfromroot.newrootpwd.focus();
        return false;
    } else if (!regpwd.test(pwd2)) {
        alert("确认密码不符合格式要求！（8-14位数字、字母或数字+字母的组合）");
        myfromroot.newrootpwd1.focus();
        return false;
    }

}