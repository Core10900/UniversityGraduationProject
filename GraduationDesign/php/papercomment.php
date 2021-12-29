<?php
$pid=$_GET['pid'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT c.text,u.screen FROM `comment` AS c JOIN `user` AS u ON c.uid=u.id WHERE c.pid=$pid ORDER BY c.time DESC";
$res=mysqli_query($conn,$sql);
$arr=[];
while($retavl=mysqli_fetch_assoc($res)){
    $arr[]=$retavl;
}
print_r(json_encode($arr));
?>