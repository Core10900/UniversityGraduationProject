<?php
$val=$_GET['val'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT COUNT(*) AS c FROM `paper` WHERE title LIKE '%$val%' AND pstatus=1";
$res=mysqli_query($conn,$sql);
$reval=mysqli_fetch_assoc($res);
print_r(json_encode($reval));

?>