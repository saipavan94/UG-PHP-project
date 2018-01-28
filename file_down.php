<?php
include "header1.php";
include "db_con.php";
$rid=$_SESSION['uid'];

$qry="select * from upload_tbl where rid='$rid' and type='1'";
$res=mysqli_query($con,$qry);

?>
<style>
tr th{
color:white;
}
</style>
<center>
<form action="down_prc.php" method=post>
<table><tr><td>
<table border=1 style="background-color:#0E7FA2;" cellpadding=5px>
<tr><th colspan=2><h1>Download With Out Key</h1></th></tr>
<tr><th>Files Name</th><th>Download</th></tr>
<?php
while($row=mysqli_fetch_array($res))
{
	/*$_SESSION['upid']=$row['upid'];
	$up_name=$row['up_name'];*/
	
	
?>
<tr>
<td><?php echo $row['up_name'];?></td>
<!--<td><input type=submit value="Download"></td></td>-->
<td><a href='correct1.php?a=<?php echo $row['up_name'];?>'><input type=button value="Download"></a></td>
</tr>
<?php } ?>
</table></td>
<td><table>
<table border=1 style="background-color:#0E7FA2;" cellpadding=5px>
<tr><th colspan=2><h1>Download With Key</h1></th></tr>
<tr><th>Files Name</th><th>Download</th></tr>
<?php
$qry="select * from upload_tbl where rid='$rid' and type=''";
$res=mysqli_query($con,$qry);

while($row=mysqli_fetch_array($res))
{
	$_SESSION['upid']=$row['upid'];
	$up_name=$row['up_name'];
	
	
?>
<tr>
<td><?php echo $row['up_name'];?></td>
<!--<td><input type=submit value="Download"></td></td>-->
<td><a href='down_prc.php?a=<?php echo $up_name;?>'><input type=button value="Download"></a></td>
</tr>
<?php } ?>
</table></td></tr>
</table>
</form>
<?php
include 'footer.php';
?>