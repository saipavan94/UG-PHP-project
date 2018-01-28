<?php
//session_start();
include "header1.php";
//include "db_con.php";
$a=$_SESSION['up_name'];
?>
<style>
tr th{
color:white;
}
</style>
  <!--<center>
  <table border=1 style="background-color:#0E7FA2;" cellpadding=5px;>
  <tr><th colspan=2><h1>Download Files</h1></th></tr>
  <tr><th>Click Here Download</th>  
   <td><a href="<?php echo 'upload/'.$a;?>"><input type=button value="Download"></a></td>
</tr>
</table>
<br>
<!--<a href="file_down.php"><input type=button value="Back"></a>

</center>-->


<?php
echo "<script>alert('Invalid Id && Key')</script>";
//echo "<script>location='file_down.php'</script>";  

include "footer.php";
?>