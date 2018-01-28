<?php
session_start();
include "db_con.php";
include "sendmail.php";
$to=$_REQUEST['to'];
$from=$_REQUEST['from'];
$des=$_REQUEST['des'];
$link=$_SESSION['up_name'];
$qry="insert into mail values('','$to','$from','$des','$link')";
if(mysqli_query($con,$qry))

//echo $des;
//die();

	$subject = 'Download Link!';			
			$body ='http://localhost:12/ZipEncrypted/ssss.php?a='.$link;			
			mail($to,$subject,$body.$des,'From: '.$from);
			
				echo"<script>alert('Mail Send Successfully !!!!')</script>";  
	echo"<script>location='file_down1.php'</script>";  
			
?>
