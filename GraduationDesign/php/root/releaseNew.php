<?php
$title=$_POST['title'];
$text=$_POST['text'];

$systime=time();
$addtime=date("Y-m-d",$systime);
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="INSERT INTO news (`title`,`text`,`time`) VALUES('$title','$text','$addtime')";
$retval=mysqli_query($conn,$sql);
if($retval){
    $arr=[2];
    print_r(json_encode($arr));
}else{
    $arr=[1];
    print_r(json_encode($arr));
}

?>