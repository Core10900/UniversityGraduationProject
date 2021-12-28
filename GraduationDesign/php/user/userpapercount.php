<?php
$id=$_GET['uid'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT COUNT(*) AS c FROM `paper` AS p JOIN `user` AS u ON p.uid=u.id WHERE p.pstatus=1 AND u.id=$id";
$res=mysqli_query($conn,$sql);

$arr=mysqli_fetch_assoc($res);
    
print_r(json_encode($arr));
?>