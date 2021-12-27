<?php
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT p.pid,p.title,p.txt,u.username FROM `paper` AS p JOIN `user` AS u ON p.uid=u.id WHERE texttype='综合型' AND pstatus=1 ORDER BY `time` DESC LIMIT 0,3";
$res=mysqli_query($conn,$sql);
$arrres=[];
while($arr=mysqli_fetch_assoc($res)){
    $arrres[]=$arr;
}
print_r(json_encode($arrres));
?>