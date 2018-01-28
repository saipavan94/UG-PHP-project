<?php 
include "db_con.php";
$a=$_REQUEST['a'];
$qry="delete from upload_tbl where upid=$a";
$res=mysqli_query($con,$qry);

echo "<script>alert('Are U Sure Delete');</script>";
echo"<script>location='download.php'</script>";
?>