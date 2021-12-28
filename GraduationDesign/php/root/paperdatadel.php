<?php
$pid=$_GET['pid'];
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="DELETE FROM paper WHERE pid=$pid";
$retval=mysqli_query($conn,$sql);
if($retval){
    $arr=[2];
    print_r(json_encode($arr));
}else{
    $arr=[1];
    print_r(json_encode($arr));
}
?>