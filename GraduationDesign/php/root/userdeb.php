<?php
$uid=$_GET['deb'];
$ustatus=$_GET['sta'];

$conn=mysqli_connect("localhost","root","root","bbs");
if($ustatus=="正常"){
    $sql="UPDATE `user` SET ustatus='封禁' WHERE id=$uid";
}else{
    $sql="UPDATE `user` SET ustatus='正常' WHERE id=$uid";
}
$res=mysqli_query($conn,$sql);
if($res){
    $arr=[1];
}else{
    $arr=[0];
}
print_r(json_encode($arr));

?>