<?php
include "header1.php";
$_SESSION['up_name']=$_REQUEST['a'];
?>
<style>
tr th{
color:white;
}
</style>
  <center>
  <form action="mail_prc.php" method=post>
 <table border=1 style="background-color:#0E7FA2;" cellpadding=5px>
 <tr><th colspan=2><h2>Send Mail</h2></th></tr>
 <tr><th>To</th><td><input type=text name=to></td></tr>
 <tr><th>From</th><td><input type=text name=from></td></tr>
 <tr><th>Link</th><td><input type=text readonly value="<?php echo 'http://localhost:12/ZipEncrypted/ssss.php?a='.$_SESSION['up_name'];?>"></td></tr>
 <tr><th>Description</th><td><textarea rows=7 cols=25 name=des></textarea></td></tr>
 </table>
  <input type=submit value="Send">

 </form>
 </center>
<?php
include "footer.php";
?>