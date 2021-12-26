<?php
$name=$_GET['name'];

$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT COUNT(*) AS c FROM `user` WHERE username LIKE '%$name%'";
$res=mysqli_query($conn,$sql);
$retval=mysqli_fetch_assoc($res);
print_r(json_encode($retval));
?>