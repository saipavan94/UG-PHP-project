<?php
session_start();
include "db_con.php";
//$sel=$_REQUEST['ad_sel'];
$uname=$_REQUEST['uname'];
$upass=$_REQUEST['upass'];

if($uname == '' && $upass == '')
{
	 	header('location:invalid.php');

}	
/*elseif($uname=='pavan' && $upass=='pavan')
{
	$_SESSION['utype']="ADMIN";	
	$_SESSION['uname']="ADMIN";	
	header('location:admin_home.php');
}*/
	
else
{
	$qry="select * from reg_tbl where uname='$uname' and upass='$upass'";
	$res=mysqli_query($con,$qry);
	 if($row=mysqli_fetch_array($res))
	{
	$_SESSION['utype']="ADMIN";	
	$_SESSION['uname']=$row['name'];	
	$_SESSION['uid']=$row['rid'];	
	$_SESSION['email']=$row['email'];
	
 	header('location:admin_home.php');
	}
	
	
	else
	{
	 	header('location:invalid.php');

	}
 
}
?>