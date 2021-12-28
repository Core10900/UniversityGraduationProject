<?php
$p=$_GET['p'];
if(empty($p)){
    $p=0;
}else{
    $p=9*$p-9;
}

$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT p.pid,p.title,u.username FROM `paper` AS p JOIN `user` AS u ON p.uid=u.id WHERE p.pstatus=0 ORDER BY p.time LIMIT $p,9";
$res=mysqli_query($conn,$sql);
$arr=[];
while($retval=mysqli_fetch_assoc($res)){
    $arr[]=$retval;
}
print_r(json_encode($arr));
?>