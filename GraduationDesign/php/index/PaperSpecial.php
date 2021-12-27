<?php
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT pid,title,txt FROM `paper` WHERE texttype='专题型' AND pstatus=1 ORDER BY time DESC LIMIT 0,3";
$res=mysqli_query($conn,$sql);
$arrres=[];
while($arr=mysqli_fetch_assoc($res)){
    $arrres[]=$arr;
}
print_r(json_encode($arrres));
?>