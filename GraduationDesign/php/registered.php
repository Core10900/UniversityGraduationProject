<?php
    $pwd1=$_POST['pwd1'];
    $pwd2=$_POST['pwd2'];
    $name=$_POST['name'];
    
    
    $dbhost="localhost";
    $dbpwd="95162400";
    $dbuser="root";
    $conn=mysqli_connect($dbhost,$dbuser,$dbpwd);
    if(!$conn){
        die('数据库链接失败：'.mysqli_error($conn));
    }

    $flag=true;
    if(!empty($_POST))
    {
        if(!preg_match('/^[0-9a-zA-Z]{8,14}$/',$pwd1)){
            echo '<script>alert("密码必须是8-14位纯数字或纯字母或数字+字母的组合！");window.location.href="../html/registered.html";</script>';
            die;
        }else if(!preg_match('/^[0-9a-zA-Z]{8,14}$/',$pwd2)){
            echo '<script>alert("密码必须是8-14位纯数字或纯字母或数字+字母的组合！");window.location.href="../html/registered.html";</script>';
            die;
        }else if($pwd1!=$pwd2){
            echo '<script>alert("两次密码不一致！");window.location.href="../html/registered.html";</script>';
            die;
        }
        // var_dump(!preg_match('/^[\u4e00-\u9fa5]{2,4}$/',$name))
        
        else if(preg_match('/^[\x80-\xff]{2,4}$/',$name)){
            echo '<script>alert("输入的姓名格式不合法！");window.location.href="../html/registered.html";</script>';
            die;
        }
        do{
            $account=rand(10000000001,19999999999);
            $sql="SELECT account,pwd FROM user WHERE account='$account' AND pwd='$pwd1'";
            mysqli_select_db( $conn, 'bbs' );
            $retval = mysqli_query( $conn, $sql );
            $res=mysqli_fetch_row($retval);
            if(!$res){
                mysqli_select_db( $conn, 'bbs' );
                $sql="INSERT INTO user (account,pwd,username) VALUES ('$account','$pwd1','$name');";
                
                $retval = mysqli_query( $conn, $sql );
                if( $retval )
                {
                    $flag=false;
                    break;
                }else{
                    
                    die('无法插入数据: ' . mysqli_error($conn));
                    
                }
            }
        }while($flag);
        echo "<script>alert('注册成功！\\n您的账号是：".$account."\\n请妥善保管您的账号和密码！');window.location.href='../html/login.html';</script>";
        // echo "<script>alert(1111)</script>";
        
    }
    
?>