<?php
session_start();
include "db_con.php";
$qry="select upid from upload_tbl order by upid desc limit 1";
$res=mysqli_query($con,$qry);
$row=mysqli_fetch_row($res);
$id_model="ID";
$id;
if($row[0] == "")
{
$id=$id_model."001";	
}
else
{
 $id=$id_model.(sprintf("%03d",(((int)substr($row[0],-3))+1)));

}
$uname=$_REQUEST['uname'];
$upass=$_REQUEST['upass'];
//$sel=$_REQUEST['sel'];
$_SESSION['uname']=$uname;
$_SESSION['upass']=$upass;
$rid=$_SESSION['uid'];

$up=($id).$_FILES['mfile']['name'];
$qry1="insert into upload_tbl values('$id','$rid','$up','$uname','$upass','')";
$res1=mysqli_query($con,$qry1);

if (is_uploaded_file($_FILES['mfile']['tmp_name'])) { //was the file uploaded?
  $filecontents = file_get_contents($_FILES['mfile']['tmp_name']);
  unlink($_FILES['mfile']['tmp_name']); // delete the temp file
  $key = "charles"; 
$crypted = encrypt($filecontents,$key); 




$f1=fopen($up,"w");
fwrite($f1,$crypted);
fclose($f1);




$zip = new ZipArchive;
$zip->open("upload/".$up.'.zip', ZipArchive::CREATE);
//foreach (glob($up as $file));
 //{
    $zip->addFile($up);
	
	//unlink($up);
   // if ($file != 'upload/important.zip') unlink($file);
//}
$zip->close();
unlink($up);					


}




				


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

function encrypt($Texte,$Cle) 
  { 
  srand((double)microtime()*1000000); 
  $CleDEncryptage = md5(rand(0,32000) ); 
  $Compteur=0; 
  $VariableTemp = ""; 
  for ($Ctr=0;$Ctr<strlen($Texte);$Ctr++) 
    { 
    if ($Compteur==strlen($CleDEncryptage)) 
      $Compteur=0; 
    $VariableTemp.= substr($CleDEncryptage,$Compteur,1).(substr($Texte,$Ctr,1) ^ substr($CleDEncryptage,$Compteur,1) ); 
    $Compteur++;
    } 
  return base64_encode(GenerationCle($VariableTemp,$Cle) );

  } 

echo"<script>alert('Upload File Successfully');</script>";
echo "<script>location='enc.php'</script>";
  ?>