<?php
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="SELECT id,title FROM `news` ORDER BY `time` DESC LIMIT 0,3";
$res=mysqli_query($conn,$sql);
$arrres=[];
while($arr=mysqli_fetch_assoc($res)){
    $arrres[]=$arr;
}
print_r(json_encode($arrres));
?>