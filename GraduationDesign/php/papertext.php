<?php
$pid=$_GET['pid'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT p.title,p.text,p.time,u.username,p.texttype FROM `paper` AS p JOIN `user` AS u ON p.uid=u.id WHERE p.pid=$pid";
$res=mysqli_query($conn,$sql);

$retavl=mysqli_fetch_assoc($res);
    
print_r(json_encode($retavl));
?>