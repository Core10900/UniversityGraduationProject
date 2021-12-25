<?php
$uid=$_GET['nid'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="DELETE FROM news WHERE id=$uid";
$res=mysqli_query($conn,$sql);
$arr=[1];
print_r(json_encode($arr));
?>