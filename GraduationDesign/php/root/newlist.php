<?php
$p=$_GET['p'];
if(empty($p)){
    $p=0;
}else{
    $p=3*$p-3;
}

$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT `id`,`title`,`time` FROM `news` LIMIT $p,3";
$res=mysqli_query($conn,$sql);
$arr=[];
while($retval=mysqli_fetch_assoc($res)){
    $arr[]=$retval;
}
print_r(json_encode($arr));
?>