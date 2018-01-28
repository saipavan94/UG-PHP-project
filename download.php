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
<table border=1 style="background-color:#0E7FA2;" cellpadding=5px>
<tr><th colspan=2><h1>VIEW FILES</h1></th></tr>
<tr><th>Files Name</th><th>Delete</th></tr>
<?php
while($row=mysqli_fetch_array($res))
{
?>
<tr>
<td><?php echo $row['up_name'];?></td>
<td><a href="del_down.php?a='<?php echo $row['upid'] ;?>'"><input type=button value="Delete"></a></td>
</tr>
<?php } ?>
</table>
<?php
include 'footer.php';
?>