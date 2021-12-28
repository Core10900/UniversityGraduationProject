<?php
$newid=$_GET['newid'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT * FROM `news` WHERE id=$newid";
$res=mysqli_query($conn,$sql);
$arr=mysqli_fetch_assoc($res);
print_r(json_encode($arr));
?>