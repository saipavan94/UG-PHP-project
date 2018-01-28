<?php
session_start();
include "db_con.php";

$up_name=$_SESSION['up_name'];
$name=$_SESSION['name'];
$pass=$_SESSION['pass'];
$qry="select * from upload_tbl where uname='$name' and upass='$pass' and up_name='$up_name'";
$res=mysqli_query($con,$qry);
$row=mysqli_fetch_array($res);
$a=$row['up_name'];

?>



<?php
function GenerationCle($Texte,$CleDEncryptage) 
  { 
  $CleDEncryptage = md5($CleDEncryptage); 
  $Compteur=0; 
  $VariableTemp = ""; 
  for ($Ctr=0;$Ctr<strlen($Texte);$Ctr++) 
    { 
    if ($Compteur==strlen($CleDEncryptage))
      $Compteur=0; 
    $VariableTemp.= substr($Texte,$Ctr,1) ^ substr($CleDEncryptage,$Compteur,1); 
    $Compteur++; 
    } 
  return $VariableTemp; 
  }

function decrypt($Texte,$Cle) 
  { 
  $Texte = GenerationCle(base64_decode($Texte),$Cle);
  $VariableTemp = ""; 
  for ($Ctr=0;$Ctr<strlen($Texte);$Ctr++) 
    { 
    $md5 = substr($Texte,$Ctr,1); 
    $Ctr++; 
    $VariableTemp.= (substr($Texte,$Ctr,1) ^ $md5); 
    } 
  return $VariableTemp; 
  }
 ?>
 <?php
$zip = new ZipArchive;
$zip->open("upload/".$row['up_name'].'.zip'); 
    $zip->extractTo('download/');
    $zip->close();
 
  $Texte = file_get_contents("download/".$row['up_name']);
  $Cle = "charles"; 
$crypted =decrypt($Texte,$Cle); 
$f1=fopen("download/".$row['up_name'],"w");
fwrite($f1,$crypted);
fclose($f1);



 $zip_file ='download/'.$row['up_name'].'.zip';
 $zip = new ZipArchive();
 $zip->open($zip_file, ZipArchive::CREATE);
$zip->addFile("download/".$row['up_name']);
$zip->close();
   
?>


 
  <style>
tr th{
color:white;
}
</style>
<center>
  <table><tr><td>
  <table border=1 style="background-color:#0E7FA2;" cellpadding=5px>
  <tr><th colspan=2><h1>Download With Out Zip</h1></th></tr>
  <tr><th>Click Here Download</th>  
   <td><a href='<?php echo "download/".$row['up_name'] ;?>'><input type=button value="Download"></a></td>
   <!--<td><a href='<?php echo $zip_file ;?>'><input type=button value="Download"></a></td>-->
</tr>
</table></td>
<BR>
<td>
  <table border=1 style="background-color:#0E7FA2;" cellpadding=5px>
  <tr><th colspan=2><h1>Download With Zip</h1></th></tr>
  <tr><th>Click Here Download</th>  
   <!--<td><a href='<?php echo "download/".$row['up_name'] ;?>'><input type=button value="Download"></a></td>-->
   <td><a href='<?php echo $zip_file ;?>'><input type=button value="Download"></a></td>
</tr>
</table></td>
</table></tr>
</center>
<?php
include "footer.php";
?>