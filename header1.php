<?php
 session_start();
 if(!(isset($_SESSION['utype'])))
 header('location:invalid.php');
?>
<html>
<head>
<link href="css/heal.css" rel="stylesheet">

	  <script type="text/javascript" src="js/jquery.js"></script>
	  <script type="text/javascript" src="js/common_jq.js"></script>
	  <script type="text/javascript" src="js/common_js.js"></script>
	  <script type="text/javascript" src="js/ajax_fn.js"></script>

</head>
<title>DATA SECURITY ON PUBLIC CLOUD</title>
 <body>
    <!--<div id=outlayout>-->
	<table width=100% height=100%>
		<tr height=13% class="print_hide"><td>	
		<div id=head1>
				<table style="background-color:#0E7FA2;width:100%">
					<tr><td><h1><center><font color=#34FF3A>DATA SECURITY ON PUBLIC CLOUD</center></h1></td></tr>
					<!--<tr><td><font color=white>WELCOME:</font><font color="green"><?php echo $_SESSION['uname'];?></td></tr>-->
					<tr><td><a href="logout.php"><input type=button value="logout"></a></td></tr>
				</table>
	 </div>
	 <tr height=8% class="print_hide"><td id="menu_bg">
		<?php include_once "nav.php"; ?>
		</td></tr>
		<tr height=72%><td>
			<div class="content">
	 <!--<div id=center>	 
	 <center>-->
	 