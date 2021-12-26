<?php
$ps=$_GET['p'];
if(empty($ps)){
    $ps=0;
}else{
    $ps=($ps-1)*8;
}
$name=$_GET['name'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT id,username,ustatus FROM `user` WHERE username LIKE '%$name%' LIMIT $ps,8";
$res=mysqli_query($conn,$sql);
$arr=[];
while($retval=mysqli_fetch_assoc($res)){
    $arr[]=$retval;
}

print_r(json_encode($arr));
?>