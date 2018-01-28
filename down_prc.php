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
  <form action="decrypt_down.php" method=post>
 <table border=1 style="background-color:#0E7FA2;" cellpadding=5px>
 <tr><th colspan=2><h2>Download File</h2></th></tr>
 <tr><th>Decryption Id</th><td><input type=text name=name></td></tr>
 <tr><th>Decryption Key</th><td><input type=password name=pass></td></tr>
 <tr><th>CLICK HERE</th><td><input type=submit value="Verify User"></a></td></tr>
 </table>
 </form>
 </center>
