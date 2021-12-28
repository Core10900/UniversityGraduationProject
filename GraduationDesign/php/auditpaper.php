<?php
$pid=$_GET['pid'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT paper.title,paper.time,paper.texttype,`user`.username,paper.text FROM paper JOIN `user` ON paper.uid=`user`.id WHERE paper.pid=$pid";
$res=mysqli_query($conn,$sql);
$arr=mysqli_fetch_assoc($res);
print_r(json_encode($arr));
?>