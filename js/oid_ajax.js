function get_oid()
{
if(window.XMLHttpRequest)
		a = new XMLHttpRequest();
	else
		a = new ActiveXObject("Microsoft.XMLHTTP");

	a.onreadystatechange = function()
	{
		if(a.readyState == 4)
		res_data = a.responseText;
		my_data = res_data.split("-");

		document.getElementById("name").value = my_data[0];
		document.getElementById("phone").value = my_data[1];
		document.getElementById("email").value = my_data[2];
		document.getElementById("o_addr").value = my_data[3];
		document.getElementById("id_proof").value = my_data[4];
		
	}
		input = document.getElementById("oid").value;

	a.open("GET","oid_check.php?p="+input, true);
	a.send();
}

function get_pid()
{
if(window.XMLHttpRequest)
		a = new XMLHttpRequest();
	else
		a = new ActiveXObject("Microsoft.XMLHTTP");

	a.onreadystatechange = function()
	{
		if(a.readyState == 4)
		res_data = a.responseText;
		my_data = res_data.split("-");

		document.getElementById("addr").value = my_data[0];

		
	}
		input = document.getElementById("pid").value;

	a.open("GET","pid_check.php?p="+input, true);
	a.send();
}