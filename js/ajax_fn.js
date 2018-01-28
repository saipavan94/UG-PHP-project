function ajax_call_rep1(obj,fpath, out_id)
{

	if(out_id==="prod_ajax")
		inp_val = 1;
	else if (out_id==="brand_ajax")
	{
		if(document.getElementById("cprod").checked)
		{
			inp_val = document.getElementById("prod_ajax").value;	
		}
		else
		{
			alert("Please Select the product First...");
			document.getElementById("cbrand").checked = false;
		}
	}
	else if (out_id==="model_ajax")
	{
		if((document.getElementById("cprod").checked) && (document.getElementById("cbrand").checked))
		{
			inp_val = "1&prod="+document.getElementById("prod_ajax").value;
			inp_val += "&brand="+ document.getElementById("brand_ajax").value;
		}
		else
		{
			alert("Please Select the product & Brand First...");
			document.getElementById("cmodel").checked = false;
		}
	}

	if(obj.checked)
	{
		var xmlhttp = getxml();
		xmlhttp.onreadystatechange=function()
			{
			  if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					document.getElementById(out_id).innerHTML=xmlhttp.responseText;
				}
			}
			var url = fpath+"?q="+inp_val;
			xmlhttp.open("GET",url,true);
			xmlhttp.send();
	}
	else
		document.getElementById(out_id).innerHTML="<option>select</option>";
}

function getxml()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  return xmlhttp;
}


function ajax_call(fpath, out_id)
{
var xmlhttp = getxml();
var inp_value = document.getElementById("prod_ajax").value;
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	if(out_id=="brand_ajax")
	{
		document.getElementById("model_ajax").innerHTML="";
	}
    document.getElementById(out_id).innerHTML=xmlhttp.responseText;

    }
	}
	var url = fpath+"?q="+inp_value;
	xmlhttp.open("GET",url,true);
	xmlhttp.send();

}


function ajax_call1(fpath, out_id)
{
var xmlhttp = getxml();
var inp_value = document.getElementById("a_prod_ajax").value;
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	if(out_id=="a_brand_ajax")
	{
		document.getElementById("a_model_ajax").innerHTML="";
	}
    document.getElementById(out_id).innerHTML=xmlhttp.responseText;

    }
	}
	var url = fpath+"?q="+inp_value;
	xmlhttp.open("GET",url,true);
	xmlhttp.send();

}

function ajax_call2(fpath, out_id)
{
var xmlhttp = getxml();
var inp_value = document.getElementById("prod_ajax1").value;
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	if(out_id=="brand_ajax1")
	{
		document.getElementById("model_ajax1").innerHTML="";
	}
    document.getElementById(out_id).innerHTML=xmlhttp.responseText;

    }
	}
	var url = fpath+"?q="+inp_value;
	xmlhttp.open("GET",url,true);
	xmlhttp.send();

}

function ajax_call_vendor(inp_value,fpath, out_id)
{
var xmlhttp = getxml();
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById(out_id).value=xmlhttp.responseText;
	document.getElementById("amount").focus();
    }
	}
	var url = fpath+"?q="+inp_value;
	xmlhttp.open("GET",url,true);
	xmlhttp.send();

}

function ajax_call_model(fpath, out_id)
{

var xmlhttp=getxml();
var inp_value = document.getElementById("prod").value;
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	if(out_id=="brand_ajax")
	{
		document.getElementById("model_ajax").innerHTML="";
	}
    document.getElementById(out_id).innerHTML=xmlhttp.responseText;

    }
  }
var url = fpath+"?q="+inp_value;
xmlhttp.open("GET",url,true);
xmlhttp.send();

}


function ajax_model(fpath, out_id)
{
var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	as = xmlhttp.responseText;
    	document.getElementById(out_id).innerHTML= as;
    }
  }
var prod = document.getElementById("prod_ajax").value;
var brand = document.getElementById("brand_ajax").value;

var url = fpath+"?prod="+prod+"&brand="+brand;
xmlhttp.open("GET",url,true);
xmlhttp.send();

}

function ajax_model2(fpath, out_id)
{
var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	as = xmlhttp.responseText;
    	document.getElementById(out_id).innerHTML= as;
    }
  }
var prod = document.getElementById("prod_ajax1").value;
var brand = document.getElementById("brand_ajax1").value;

var url = fpath+"?prod="+prod+"&brand="+brand;
xmlhttp.open("GET",url,true);
xmlhttp.send();

}

function ajax_model1(fpath, out_id)
{
var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById(out_id).innerHTML=xmlhttp.responseText;

    }
  }
var prod = document.getElementById("a_prod_ajax").value;
var brand = document.getElementById("a_brand_ajax").value;

var url = fpath+"?prod="+prod+"&brand="+brand;
xmlhttp.open("GET",url,true);
xmlhttp.send();
}

function chk_uname(name)
{
var xmlhttp=getxml();
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		if(xmlhttp.responseText == "Exist")
		{
			alert("This Username already Exist, \n Try a Different Name");
			set("pass1","");
			set("pass2","");
			set("usname","");
			document.getElementById("usname").focus();
		}
		else
				document.getElementById("user_form").submit();
    }
  }

var url = "get_uname.php?q="+name;
xmlhttp.open("GET",url,true);
xmlhttp.send();
}

function chk_vendor()
{
var xmlhttp=getxml();
var vendor = document.getElementById("vendor").value;
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		if(xmlhttp.responseText == "Exist")
		{
			alert("This Vendor already Exist, \n Try a Different Name");
			document.getElementById("vendor").focus();
		}
		else
				document.getElementById("vendor_form").submit();
    }
  }

var url = "get_vendor.php?q="+vendor;
xmlhttp.open("GET",url,true);
xmlhttp.send();
}

function chk_imei(fld)
{
	var xmlhttp=getxml();
	var num1 = document.getElementById(fld).value.trim();
	if(num1 == "")
	return;
	else
	{
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			if(xmlhttp.responseText == "Exist")
			{
				alert("This IMEI Number already Exist, \n Try a Different Number");
				document.getElementById(fld).value="";
				document.getElementById(fld).focus();
			}
			else
				return;
		}
	  }

	var url = "get_imei.php?q="+num1;
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
	}
}

function tchk_imei(elt)
{
	fld =elt.id;
	var xmlhttp=getxml();
	var num1 = document.getElementById(fld).value.trim();
	if(num1 == "")
	return;
	else
	{
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			if(xmlhttp.responseText == "Dont")
			{
				alert("This IMEI Number Does Not Exist, \n Try a Different Number");
				document.getElementById(fld).value="";
				document.getElementById(fld).focus();
			}
			else
				tcheck_data(elt.value);
		}
	  }

	var url = "get_imei.php?q="+num1;
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
	}
}

function ajax_color(fpath, out_id)
{

var xmlhttp = getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById(out_id).innerHTML=xmlhttp.responseText;
    }
  }
var prod = document.getElementById("prod_ajax").value;
var brand = document.getElementById("brand_ajax").value;
var model = document.getElementById("model_ajax").value;

var url = fpath+"?prod="+prod+"&brand="+brand+"&model="+model;

xmlhttp.open("GET",url,true);
xmlhttp.send();
}

function check_data(x)
{
if(x=="")
return;
var res;
var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	res = xmlhttp.responseText;
	if(res.length==0)
	return;
	else
	{
	data = res.split("-");
	document.getElementById("prod_ajax").innerHTML = "<option selected value='"+data[0]+"'>"+data[0]+"</option>";
	document.getElementById("brand_ajax").innerHTML = "<option selected value='"+data[1]+"'>"+data[1]+"</option>";
	document.getElementById("model_ajax").innerHTML = "<option selected value='"+data[2]+"'>"+data[2]+"</option>";
	document.getElementById("tr_price").value = data[3];
	document.getElementById("sl_price").value = data[4];
	document.getElementById("imei1").focus();
	}
    }
  }

var url = "get_data.php?q="+x;

xmlhttp.open("GET",url,true);
xmlhttp.send();
}

function tcheck_data(x)
{
if(x=="")
return;
var res;
var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	res = xmlhttp.responseText;
	if(res.length==0)
	return;
	else
	{

	data = res.split("-");
	document.getElementById("prod_ajax").innerHTML = "<option selected value='"+data[0]+"'>"+data[0]+"</option>";
	document.getElementById("brand_ajax").innerHTML = "<option selected value='"+data[1]+"'>"+data[1]+"</option>";
	document.getElementById("model_ajax").innerHTML = "<option selected value='"+data[2]+"'>"+data[2]+"</option>";
	document.getElementById("tr_price").value = data[3];

	document.getElementById("imei1").value = data[4];
	document.getElementById("imei2").value = data[5];
	document.getElementById("imei3").value = data[6];	
	document.getElementById("pdate").value = data[7]+"-"+data[8]+"-"+data[9];
	}
    }
  }

var url = "get_tdata.php?q="+x;

xmlhttp.open("GET",url,true);
xmlhttp.send();
}



function check_data1(x)
{
if(x=="")
return;
var res;
var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	res = xmlhttp.responseText;
	if(res.length==0)
	return;
	else
	{
	data = res.split("-");
	document.getElementById("prod_ajax1").innerHTML = "<option selected value='"+data[0]+"'>"+data[0]+"</option>";
	document.getElementById("brand_ajax1").innerHTML = "<option selected value='"+data[1]+"'>"+data[1]+"</option>";
	document.getElementById("model_ajax1").innerHTML = "<option selected value='"+data[2]+"'>"+data[2]+"</option>";
	document.getElementById("tr_price").value = data[3];
	document.getElementById("sl_price").value = data[4];
	document.getElementById("add_btn").focus();
	}
    }
  }

var url = "get_data.php?q="+x;

xmlhttp.open("GET",url,true);
xmlhttp.send();
}

function check_imei_data(x)
{
if(x=="")
return;
var res;
var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	res = xmlhttp.responseText;
	if(res.length==0)
	return;
	else
	{
	data = res.split("-");
	document.getElementById("prod_ajax").innerHTML = "<option selected value='"+data[0]+"'>"+data[0]+"</option>";
	document.getElementById("brand_ajax").innerHTML = "<option selected value='"+data[1]+"'>"+data[1]+"</option>";
	document.getElementById("model_ajax").innerHTML = "<option selected value='"+data[2]+"'>"+data[2]+"</option>";
	document.getElementById("reason").focus();
	}
    }
  }

var url = "get_imei_data.php?q="+x;

xmlhttp.open("GET",url,true);
xmlhttp.send();
}

function bill_data(x)
{
if(x=="")
return;
var res;
var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	res = xmlhttp.responseText;
	if(res.length==0)
	return;
	else
	{
	data = res.split("-");
	document.getElementById("prod_ajax").value = data[0];
	document.getElementById("brand_ajax").value = data[1];
	document.getElementById("model_ajax").value = data[2];
	document.getElementById("sl_price").value = data[4];
	document.getElementById("add_btn").focus();
	}
    }
  }

var url = "get_data.php?q="+x;

xmlhttp.open("GET",url,true);
xmlhttp.send();
}

function bill_data1(x)
{
	
		var res;
		var xmlhttp=getxml();

		xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			res = xmlhttp.responseText;
			document.getElementById("td_prod").innerHTML = "<select tabindex=5 style='width:140px;' name='a_prod' onchange='ajax_call1(\"get_brand.php\",\"a_brand_ajax\")' id='a_prod_ajax'>"+res+"</select>";
			document.getElementById("td_brand").innerHTML = "<select tabindex=6 name='a_brand' style='width:140px;' id='a_brand_ajax' onchange='ajax_model1(\"get_model_rep.php\",\"a_model_ajax\")'> </select>";
			document.getElementById("td_model").innerHTML = "<select tabindex=7 name='a_model'  style='width:140px;' id='a_model_ajax'  onchange='get_access1()'></select>";
			document.getElementById("a_prod_ajax").focus();
			}
		  }

		var url = "get_product.php?q=1";

		xmlhttp.open("GET",url,true);
		xmlhttp.send();


}

function bill_imei_data(x)
{
if(x=="")
return;
var res;
var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	res = xmlhttp.responseText;
	if(res.length==0)
	return;
	else
	{
	data = res.split("-");
	document.getElementById("prod_ajax").value = data[0];
	document.getElementById("brand_ajax").value = data[1];
	document.getElementById("model_ajax").value = data[2];
	document.getElementById("sl_price").value = data[3];
	document.getElementById("imei1").value = data[4];
	document.getElementById("imei2").value = data[5];
	document.getElementById("imei3").value = data[6];
	
	document.getElementById("add_btn").focus();
	}
    }
  }

var url = "get_imei_data.php?q="+x;

xmlhttp.open("GET",url,true);
xmlhttp.send();
}

function ajax_chk_qty(x)
{

var prod= document.getElementById("prod_ajax").value;
var brand= document.getElementById("brand_ajax").value;
var model= document.getElementById("model_ajax").value;
var qty= 1;
var branch = x;

url = "check_qty.php?prod="+prod+"&brand="+brand+"&model="+model+"&branch="+branch+"&qty="+qty;

var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	
    ret_value =(xmlhttp.responseText).trim();
	if(ret_value == "yes")
	{
		billdisp();
	}
	else
	{
		alert("Product Availability : "+ret_value);
		return true;
	}
    }
  }

xmlhttp.open("GET",url,true);
xmlhttp.send();

}

function ajax_chk_qty_imei(x)
{

var imei1= document.getElementById("imei1").value;
var imei2= document.getElementById("imei2").value;
var imei3= document.getElementById("imei3").value;
var qty= 1;
var branch = x;

url = "check_qty_imei.php?imei1="+imei1+"&imei2="+imei2+"&imei3="+imei3+"&branch="+x;

var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	
    ret_value =(xmlhttp.responseText).trim();

	if(ret_value == "yes")
	{
		billdisp();
	}
	else if(ret_value == "Unavailable")
	{
		alert("Product Unavailable...\n\nRequired Product & Qty is Not Available In this Branch\nTransfer it from other branch");
		return true;
	}
	else
	{
		alert("Product Already Billed \nBill No: "+ret_value);
		return true;
	}
    }
  }

xmlhttp.open("GET",url,true);
xmlhttp.send();

}


function ajax_chk_qty1(x)
{

var prod= document.getElementById("a_prod_ajax").value;
var brand= document.getElementById("a_brand_ajax").value;
var model= document.getElementById("a_model_ajax").value;
var qty= document.getElementById("a_qty").value;
var branch = x;

url = "check_qty.php?prod="+prod+"&brand="+brand+"&model="+model+"&branch="+branch+"&qty="+qty;
var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	
    ret_value =(xmlhttp.responseText).trim();

	if(ret_value == "yes")
	{
		billdisp1();
	}
	else
	{
		alert("Product Availability : "+ret_value);
		return true;
	}
    }
  }

xmlhttp.open("GET",url,true);
xmlhttp.send();

}

function get_access()
{
var res;
var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	res = xmlhttp.responseText;
	if(res.length==0)
	return;
	else
	{
	data = res.split("-");
	document.getElementById("tr_price").value = data[0];
	document.getElementById("sl_price").value = data[1];
	document.getElementById("qty").focus();
	}
    }
  }

var prod = document.getElementById("prod_ajax").value;
var brand = document.getElementById("brand_ajax").value;
var model = document.getElementById("model_ajax").value;
var url = "get_access.php?prod="+prod+"&brand="+brand+"&model="+model;
xmlhttp.open("GET",url,true);
xmlhttp.send();

}

function get_access1()
{
var res;
var xmlhttp=getxml();

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	res = xmlhttp.responseText;
	if(res.length==0)
	return;
	else
	{
	data = res.split("-");
	document.getElementById("a_sl_price").value = data[1];
	document.getElementById("a_qty").value = 1;	
	document.getElementById("a_sub_total").value = data[1];
	document.getElementById("a_color_ajax").focus();
	}
    }
  }

var prod = document.getElementById("a_prod_ajax").value;
var brand = document.getElementById("a_brand_ajax").value;
var model = document.getElementById("a_model_ajax").value;
var url = "get_access.php?prod="+prod+"&brand="+brand+"&model="+model;
xmlhttp.open("GET",url,true);
xmlhttp.send();

}
