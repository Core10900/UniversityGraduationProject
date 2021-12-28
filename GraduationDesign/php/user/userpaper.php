<?php
$id=$_GET['uid'];
$p=$_GET['p'];
if(empty($p)){
    $p=0;
}else{
    $p=6*$p-6;
}
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT p.pid,p.title,p.time FROM `paper` AS p JOIN `user` AS u ON p.uid=u.id WHERE p.pstatus=1 AND u.id=${id}  LIMIT $p,6";
$res=mysqli_query($conn,$sql);
$arr=[];
while($arrs=mysqli_fetch_assoc($res)){
    $arr[]=$arrs;
}
print_r(json_encode($arr));
?>