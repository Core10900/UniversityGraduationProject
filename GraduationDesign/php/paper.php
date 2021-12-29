<?
$pid=$_GET['pid'];
$uid=$_GET['uid'];
$txt=$_GET['val'];
$systime=time();
$addtime=date("Y-m-d",$systime);
$conn=mysqli_connect("localhost","root","root","bbs");
$sql="INSERT INTO `comment` (pid,`uid`,`text`,`time`) VALUES($pid,$uid,'$txt','$addtime')";
$res=mysqli_query($conn,$sql);
if($res){
    $arr=[1];
}else{
    $arr=[0];
}
print_r(json_encode($arr));

?>