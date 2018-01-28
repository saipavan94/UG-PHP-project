<?php
?>
<html>
<head>
<link href="css/heal.css" rel="stylesheet">
<style>
tr th 
{
 color:white;
}
</style>
</head>
<title>DATA SECURITY ON PUBLIC CLOUD</title>
 <body>
 <form action="login_prc.php" method=post>
   <div id=outlayout>
     <div id=head>
		<h2> DATA SECURITY ON PUBLIC CLOUD</h2>
	 </div>
		<div id=content>
			<center>
			<table id=login>
				<tr><th colspan=3><font color=red>INVALID LOGIN</font></th></tr>
				
				<!--<tr><td>USER TYPE</td>
						<td><select name=ad_sel>
								<option>SELECT</option>
								<option>CLOUD</option>
								<option>ADMIN</option>
								<option>USER</option>
							</select></td></tr>-->
				<tr><td>USER NAME</td><td><input type=text name=uname></td></tr>
				<tr><td>PASSWORD</td><td><input type=password name=upass></td></tr>
				<tr><td></td><td><input type=submit value="Login"></td></tr>

				</table>
				<table>
					<!--<td><a href="registre.php"><input type=button value="Register"></a></td>
				</tr>-->
			</table>
			</center>
		</div> 
		<div class=footer>
			
		</div>
	 
	</div>
	</form>
</body>
</html>
