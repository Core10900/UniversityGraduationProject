<?php
$title=$_POST['newtitle'];
$text=$_POST['newtext'];
$systime=time();
$addtime=date("Y-m-d",$systime);
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="INSERT INTO news (title,text,time) VALUES('$title','$text','$addtime')";
$arr=[2];
print_r(json_encode($arr));
?>