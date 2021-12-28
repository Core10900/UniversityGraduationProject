<?php
$id=$_GET['uid'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT account,ustatus,school,screen FROM `user` WHERE id=$id";
$res=mysqli_query($conn,$sql);
$arr=mysqli_fetch_assoc($res);
print_r(json_encode($arr));
?>