
var releaseNewbtn=document.getElementById("releaseNew");
releaseNewbtn.onclick=function(){
    let showreleaseNew=document.getElementById("show");
    showreleaseNew.style.display="block";
    let others=document.querySelectorAll(".show");
    others.forEach((item)=>{
        let showid=item.getAttribute("id");
        if(showid!="show"){
            item.style.display="none";
        }
    })
}
let releasebtn=document.getElementById('releasebtn');
releasebtn.onclick=()=>{
    let relenewtitle=document.getElementById("relenewtitle").value;
    let newtext=tinyMCE.activeEditor.getContent();
    let activeEditor = tinymce.activeEditor;
    let editBody = activeEditor.getBody();
    activeEditor.selection.select(editBody);
    let text = activeEditor.selection.getContent( { 'format': 'text'} );
    let num=text.length;
    
    if(num<200){
        alert("新闻正文内容少于200字，请检查内容是否缺失");
    }else{
        let xhr;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.open("post","../../php/root/releaseNew.php",true);
        xhr.send();
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            console.log(data);
        }
    }

}

