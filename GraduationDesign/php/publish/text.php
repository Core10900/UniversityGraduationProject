<?php
$title=$_POST['title'];
$text=$_POST['text'];
$txt=$_POST['txt'];
$uid=$_POST['uid'];
$type=$_POST['type'];

$systime=time();
$addtime=date("Y-m-d",$systime);
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="INSERT INTO paper (`title`,`text`,`time`,`uid`,`txt`,`texttype`) VALUES('$title','$text','$addtime','$uid','$txt','$type')";
$retval=mysqli_query($conn,$sql);
if($retval){
    $arr=[2];
    print_r(json_encode($arr));
}else{
    $arr=[1];
    print_r(json_encode($arr));
}
?>