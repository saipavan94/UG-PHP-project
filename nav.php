<html>
<body>
<?php
 if($_SESSION['utype']=='ADMIN')
 {
?>
<div id="container" class="print_hide">
	<!--<ul>
	 <li><a href="admin_home.php" class="dropdown">Home</a></li>
	</ul>-->
	<ul>
	 <li><a href="sequire.php" class="dropdown">Secuire</a></li>
	</ul>
	<!--<ul>
	 <li><a href="add_owner_detail.php" class="dropdown">User Register</a></li>
	 	 	 <li class="sublinks">
			<a href="view.php">View</a>
			<a href="edit.php">Edit</a>
			<a href="delete.php">Delete</a>
		</li>
	</ul>-->
	<ul>
	 <li><a href="enc.php" class="dropdown">Upload Files</a></li>
	</ul>
	<ul>
	 <li><a href="download.php" class="dropdown">View Files</a></li>
		 <!--<li class="sublinks">
			<a href="edit_file.php">Edit</a>
			<a href="delete_file.php">Delete</a>
		</li>-->
	</ul>
	<ul>
	 <li><a href="file_down.php" class="dropdown">Download Files</a></li>

	</ul>
	<ul>
	 <li><a href="file_down1.php" class="dropdown">Send Files</a></li>

	</ul>
	</div>
<?php 
} 
elseif($_SESSION['utype']=='USER')
{
?>
<div id="container" class="print_hide">
	<ul>
	 <li><a href="user_home.php" class="dropdown">Home</a></li>
	</ul>
	<ul>
	 <li><a href="fsearch.php" class="dropdown">File Search</a></li>
	</ul>
	
	<ul>
	 <li><a href="file_down.php" class="dropdown"> Download File</a></li>
	</ul>
	<ul>
	 <li><a href="receiv.php" class="dropdown"> Received Files</a></li>
	</ul>

<!-- 	<ul>
	 <li><a href="#" class="dropdown">Buy Property</a></li>
	 	 <li class="sublinks">
			<a href="buy_property.php">Rent</a>
			<a href="buy_lease_pro.php">Lease</a>
			<a href="buy_sell_pro.php">Sell</a>
		</li>
	</ul>
	<ul>
	 <li><a href="#" class="dropdown">View Request</a></li>
	 	 	 <li class="sublinks">
			<a href="view_rent.php">Rent</a>
			<a href="view_lease.php">Lease</a>
			<a href="view_sell.php">Sell</a>
		</li>
	 </ul> -->
	
</div>
<?php 
} 
elseif($_SESSION['utype']=='CLOUD')
{
?>
<div id="container" class="print_hide">
	<ul>
	 <li><a href="cloud_home.php" class="dropdown">Home</a></li>
	</ul>
	<ul>
	 <li><a href="cloud_file.php" class="dropdown">MANAGE FILES</a></li>
	</ul>
</div>
<?php
}
?>
</body>
</html>