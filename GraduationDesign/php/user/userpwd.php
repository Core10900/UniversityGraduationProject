<?php
$uid=$_GET['uid'];
$pwd=$_GET['pwd'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="UPDATE `user` SET pwd='$pwd' WHERE id=$uid;";
$res=mysqli_query($conn,$sql);
if($res){
    $arr=[1];
}else{
    $arr=[0];
}
print_r(json_encode($arr));
?>