<?php
$u=$_GET['u'];
if(empty($u)){
    $p=0;
}else{
    $p=($u-1)*8;
}



$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT id,username,ustatus FROM `user` LIMIT $p,8";
$res=mysqli_query($conn,$sql);
$arr=[];

while($retval=mysqli_fetch_assoc($res)){
    $arr[]=$retval;
}
print_r(json_encode($arr));
?>