<?php
$val=$_GET['val'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT p.pid,p.title,u.username,p.time FROM `paper` AS p JOIN `user` AS u ON p.uid=u.id WHERE title LIKE '%$val%' LIMIT 0,10";
$res=mysqli_query($conn,$sql);
$arr=[];
while($reval=mysqli_fetch_assoc($res)){
    $arr[]=$reval;
}
print_r(json_encode($arr));
?>