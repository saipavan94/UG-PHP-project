<?php
?>
<html>
<head>
<link href="css/heal.css" rel="stylesheet">
</head>
<title></title>
 <body>
 <form action="register_prc.php" method=post>
   <div id=outlayout>
     <div id=head>
		<h1>DATA SECURITY ON PUBLIC CLOUD</h1>
	 </div>
		<div id=content>
			<center>
			<table id=login cellpadding=10px>
				<tr><th colspan=3><font color=blue>New Register Form</th></tr>
				
				<tr><td>NAME</td><td><input type=text required name=name></td></tr>
				<tr><td>PHONE</td><td><input type=text required name=phone></td></tr>
				<tr><td>EMAIL</td><td><input type=text required name=email></td></tr>
				<tr><td>USER NAME</td><td><input type=text required name=uname></td></tr>
				<tr><td>PASSWORD</td><td><input type=password required name=upass></td></tr>
				<tr><td colspan=2><center><input type=submit value="Submit"></center></td>
				</table>

			</center>
		</div> 
		<div class=footer>
		
		</div>
	 
	</div>
	</form>
</body>
</html>


<?php
include "footer.php";
?>