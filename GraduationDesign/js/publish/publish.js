let submitbtnEle=document.getElementById("submitbtn");
// console.log(submitbtnEle);
submitbtnEle.onclick=function(){
    let relenewtitle=document.getElementById("texttitle").value;
    let text=tinyMCE.activeEditor.getContent();
    let activeEditor = tinymce.activeEditor;
    let editBody = activeEditor.getBody();
    activeEditor.selection.select(editBody);
    let retext = activeEditor.selection.getContent( { 'format': 'text'} );
    let num=retext.length;
    let radioval=$('input:radio:checked').val()
    let cookieres=document.cookie;
    let uid;
    let ustatus;
    if(cookieres.length<4){
        uid=undefined;
        ustatus=undefined;
    }else{
        let cookiearr=cookieres.split(";");
        uid=cookiearr[0].split("=");
        ustatus=cookiearr[1].split("=");
        ustatus=ustatus[1];
        uid=Number(uid[1]);
    }
    // console.log(cookieres);
    
    let titlereg = /^[\u4e00-\u9fa5]{1,}$/;

    // console.log(uid);
    // console.log(relenewtitle);
    // console.log(radioval);
    // console.log(num);
    // console.log(text);
    // console.log(retext);
    // console.log(ustatus);

    
    if(num<1000){
        alert("正文内容少于1000字，请检查内容是否缺失");
    }else if(radioval==undefined){
        alert("请选择论文类型")
    }else if(relenewtitle.length<1){
        alert("请完善论文标题")
    }else if(!titlereg.test(relenewtitle)){
        alert("论文标题必须是中文显示，且无任何符号");
    }else if(uid<1){
        alert("无法获取账号信息，请检查是否已登录账号且浏览器是否支持cookie,重新登录");
    }else if(ustatus!='正常'){
        alert("您的账号已经被封禁，暂时没有权限申请发布论文，如果有疑问请给官方发送邮件申请解封（官方邮箱：1600661295@qq.com）");
    }
    else{
       
        let from=new FormData();
        from.append("uid",uid);
        from.append("title",relenewtitle);
        from.append("text",text);
        from.append("txt",retext);
        from.append("type",radioval);

        $.ajax({
            type: "post",
            url: '../php/publish/text.php',
            contentType:false,
            processData:false,
            data: from,
            success: function (data) {
                let arr=JSON.parse(data);
                if(arr[0]==2){
                    alert("申请成功！请耐心等待审核");
                    window.location.href="./bbs.html";
                }else{
                    alert("发布失败！请注意正文中是否有非法格式或非法字符！");
                }
            }
        })
    }
}