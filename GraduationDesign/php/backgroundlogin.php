
<?php
    $user=$_POST['username'];
    $pwd=$_POST['pwd'];
   
    $dbhost="localhost";
    $dbpwd="root";
    $dbuser="root";
    $conn=mysqli_connect($dbhost,$dbuser,$dbpwd);
    if(!$conn){
        die('数据库链接失败：'.mysqli_error($conn));
    }
    
    $flag=true;
    if(!empty($_POST))
    {
        if(!preg_match('/^[0-9]{11}$/',$user)){
            echo '<script>alert("账号必须是11位纯数字！");window.location.href="../html/backgroundlogin.html";</script>';
            die;
        }else if(!preg_match('/^[0-9a-zA-Z]{8,14}$/',$pwd)){
            echo '<script>alert("密码必须是8-14位纯数字或纯字母或数字+字母的组合！");window.location.href="../html/backgroundlogin.html";</script>';
            die;
        }
        $sql="SELECT rootaccount,rootpwd FROM root WHERE rootaccount='$user' AND rootpwd='$pwd'";
        mysqli_select_db( $conn, 'bbs' );
        $retval = mysqli_query( $conn, $sql );
        
        $res=mysqli_fetch_row($retval);
        // echo $res;
        // $length=count($res);
        // echo $length;
        
        if(!$res){
            $flag=false;
            echo '<script>alert("账号或密码不正确！");window.location.href="../html/backgroundlogin.html";</script>';
            die;
        }else{
            $flag=true;
        }
        if($flag){
            echo '<script>window.location.href="../html/backgroundlogin.html#1";alert("后台登录成功！");</script>';
            //网页跳转到首页并发送哈希值
        }
    }

?>