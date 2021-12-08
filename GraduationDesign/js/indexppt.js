window.onload = function() {

    var login = document.getElementById("logins");
    // 获取 页面的哈希值；
    var hashStr = window.location.hash;
    switch (hashStr) {
        case '#1':
            login.innerHTML = "欢迎登录中国教师学术论坛网!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id='regis'>[注销]</button>";


            break;
            // case '#page2':
            //     pageEle.innerHTML = "<h1>我是b页面</h1>";
            //     break;
        default:
            login.innerHTML = '<a href="../html/login.html">[登录]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="registered.html">[注册]</a>';
            break;
    }
    var regbtn = document.getElementById("regis");
    regbtn.onclick = function() {
        var res = confirm("您确定退出登录吗？");
        if (res) {
            window.location.href = 'index.html';
            alert("注销成功！");
        }
    }

};