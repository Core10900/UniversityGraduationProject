<?php
$pwd1=$_POST['newrootpwd'];
$pwd2=$_POST['newrootpwd1'];
$rid=$_POST['rootcookieids'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="UPDATE `root` SET rootpwd='$pwd1' WHERE id=$rid";
$retval=mysqli_query($conn,$sql);
if($retval){
    echo "<script>alert('密码修改成功！');window.location.href='../../html/backgroundlogin.html';</script>";
}else{
    echo "<script>alert('密码修改失败！');window.location.href='../../html/backgroundlogin.html';</script>";
}
?>