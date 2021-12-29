<?php
$p=$_GET['p'];
if(empty($p)){
    $p=0;
}else{
    $p=7*$p-7;
}

$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT COUNT(*) AS c FROM `paper` WHERE pstatus=1";
$res=mysqli_query($conn,$sql);
$reval=mysqli_fetch_assoc($res);
print_r(json_encode($reval));
?>