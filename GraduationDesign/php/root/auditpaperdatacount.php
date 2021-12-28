<?php
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT COUNT(*) AS c FROM paper WHERE paper.pstatus=0";
$res=mysqli_query($conn,$sql);
$retval=mysqli_fetch_assoc($res);
print_r(json_encode($retval));
?>