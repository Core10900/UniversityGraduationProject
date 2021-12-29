<?php



$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT COUNT(*) AS c FROM `paper` WHERE pstatus=1 AND texttype='论辩型'";
$res=mysqli_query($conn,$sql);
$reval=mysqli_fetch_assoc($res);
print_r(json_encode($reval));
?>