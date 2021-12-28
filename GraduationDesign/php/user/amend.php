<?php
$uid=$_GET['uid'];
$school=$_GET['school'];
$screen=$_GET['screen'];

$conn=mysqli_connect("localhost","root","root","bbs");
$sql="UPDATE `user` SET school='${school}',screen='${screen}' WHERE id=${uid};";
$res=mysqli_query($conn,$sql);
if($res){
    $arr=[1];
}else{
    $arr=[0];
}
print_r(json_encode($arr));
?>