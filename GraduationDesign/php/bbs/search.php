<?php
$p=$_GET['p'];
if(empty($p)){
    $p=0;
}else{
    $p=7*$p-7;
}
$val=$_GET['val'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT p.pid,p.title,u.username,p.time,p.texttype FROM `paper` AS p JOIN `user` AS u ON p.uid=u.id WHERE p.title LIKE '%$val%' AND p.pstatus=1 LIMIT $p,7";
$res=mysqli_query($conn,$sql);
$arr=[];
while($reval=mysqli_fetch_assoc($res)){
    $arr[]=$reval;
}
print_r(json_encode($arr));
?>