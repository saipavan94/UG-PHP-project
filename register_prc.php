<?php
include "db_con.php";
$name=$_REQUEST['name'];
$phone=$_REQUEST['phone'];
$email=$_REQUEST['email'];
$uname=$_REQUEST['uname'];
$upass=$_REQUEST['upass'];

$qry="insert into reg_tbl values('','$name','$phone','$email','$uname','$upass')";
$res=mysqli_query($con,$qry);
echo "<script>alert('New Register Successfully');</script>";
echo "<script>location='index.php';</script>";
?>