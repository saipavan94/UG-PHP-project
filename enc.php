<?php
include "header1.php";

?>
<style>
tr th{
color:white;
}
</style>
<form action="enc_mail.php" method=post enctype="multipart/form-data">
<center>
<table border=1 style="background-color:#0E7FA2;" cellpadding=5px>
<tr><th colspan=2><h1>UPLOAD FILES</h1></th></tr>
<tr><th>Decryption Id</th><td><input type=text name=uname></td></tr>
<tr><th>Decryption key</th><td><input type=password name=upass></td></tr>
<tr><th>UPLOAD FILES</th><td><input type=file name="mfile"></td></tr>
<!--<tr><th>UPLOAD Type</th><td>
<select name=sel>
<option>SELECT</option>
<option>document</option>
<option>music</option>
<option>video</option>
</select>

</td></tr>-->
</table>
<br>
<input type=submit value="upload">
</center>
</form>
<?php
include 'footer.php';
?>
