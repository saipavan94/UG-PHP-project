<?php
session_start();
include "db_con.php";
$up_name=$_SESSION['up_name'];
$name=$_REQUEST['name'];
$pass=$_REQUEST['pass'];
$_SESSION['name']=$name;
$_SESSION['pass']=$pass;

$qry="select * from upload_tbl where uname='$name' and upass='$pass' and up_name='$up_name'";
$res=mysqli_query($con,$qry);
if(mysqli_num_rows($res)<=0)
{
	echo"<script>location='wrong.php'</script>";  
}
else
{
	echo"<script>location='yyyy.php'</script>";  

}
?>
