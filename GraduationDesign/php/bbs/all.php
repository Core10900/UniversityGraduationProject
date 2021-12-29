<?php
$p=$_GET['p'];
if(empty($p)){
    $p=0;
}else{
    $p=7*$p-7;
}

$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT p.pid,p.title,u.username,p.time,p.texttype FROM `paper` AS p JOIN `user` AS u ON p.uid=u.id WHERE p.pstatus=1 ORDER BY p.time DESC LIMIT $p,7";
$res=mysqli_query($conn,$sql);
$arr=[];
while($reval=mysqli_fetch_assoc($res)){
    $arr[]=$reval;
}
print_r(json_encode($arr));
?>