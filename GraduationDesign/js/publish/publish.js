let submitbtnEle=document.getElementById("submitbtn");
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
    let cookiearr=cookieres.split(";");
    let uid=cookiearr[0].split("=");
    uid=Number(uid[1]);
    let titlereg = /^[\u4e00-\u9fa5]{1,}$/;

    // console.log(uid);
    // console.log(relenewtitle);
    // console.log(radioval);
    // console.log(num);
    // console.log(text);
    // console.log(retext);

    
    
    if(num<1000){
        alert("正文内容少于1000字，请检查内容是否缺失");
    }else if(radioval==undefined){
        alert("请选择论文类型")
    }else if(relenewtitle.length<1){
        alert("请完善论文标题")
    }else if(!titlereg.test(relenewtitle)){
        alert("论文标题必须是中文显示");
    }else if(!uid){
        alert("无法获取账号信息，请检查浏览器是否支持cookie,重新登录");
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
                    alert("发布成功！");
                    window.location.href="./bbs.html";
                }else{
                    alert("发布失败！");
                }
            }
        })
    }
}