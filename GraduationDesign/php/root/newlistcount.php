<?php
$p=$_POST['p'];
if(empty($p)){
    $p=0;
}
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT COUNT(*) AS c FROM `news`";
$res=mysqli_query($conn,$sql);
$retval=mysqli_fetch_assoc($res);
print_r(json_encode($retval));
?>