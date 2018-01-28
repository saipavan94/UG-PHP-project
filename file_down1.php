<?php
include "header1.php";
include "db_con.php";
$rid=$_SESSION['uid'];
$qry="select * from upload_tbl where rid='$rid'";
$res=mysqli_query($con,$qry);

?>
<style>
tr th{
color:white;
}
</style>
<center>
<form action="down_prc.php" method=post>
<table border=1 style="background-color:#0E7FA2;" cellpadding=5px>
<tr><th colspan=2><h1>Send Files</h1></th></tr>
<tr><th>Files Name</th><th>Send Link</th></tr>
<?php
while($row=mysqli_fetch_array($res))
{
	$_SESSION['upid']=$row['upid'];
	$up_name=$row['up_name'];
	
	
?>
<tr>
<td><?php echo $row['up_name'];?></td>
<!--<td><input type=submit value="Download"></td></td>-->
<td><a href='down1_prc.php?a=<?php echo $up_name;?>'><input type=button value="Send Link"></a></td>
</tr>
<?php } ?>
</table>
</form>
<?php
include 'footer.php';
?>