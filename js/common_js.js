
function serviceelt(val)
{
	if(val != "" && val != null)
	document.getElementById("imei_fld").className = "";
	else
	document.getElementById("imei_fld").className = "hide";	
}

function getbat(x)
{
	if(x)
	{
		document.getElementById("txt_bat").readOnly = false;
		document.getElementById("txt_bat").focus();
	}
	else
	{
		document.getElementById("txt_bat").value="";
		document.getElementById("txt_bat").readOnly = true;
	}

}

function disbr(a)
{
	if(a)
	{
		document.getElementById("branch").disabled = false;
		document.getElementById("branch").focus();
	}
	else
	{
		document.getElementById("branch").disabled = true;
	}
}

function disvn(a)
{
	if(a)
	{
		document.getElementById("vendor").disabled = false;
		document.getElementById("vendor").focus();
	}
	else
	{
		document.getElementById("vendor").disabled = true;
	}
}

function disb(a)
{
	if(a)
	{
		document.getElementById("pwise_fs").disabled = false;
		document.getElementById("prod_ajax").focus();
	}
	else
	{
		document.getElementById("pwise_fs").disabled = true;
	}
}

function disbs(a)
{
	if(a)
	{
		document.getElementById("ser_sta").disabled = false;
		document.getElementById("ser_sta").focus();
	}
	else
	{
		document.getElementById("ser_sta").disabled = true;
	}
}

function disbst(a)
{
	if(a)
	{
		document.getElementById("status").disabled = false;
		document.getElementById("status").focus();
	}
	else
	{
		document.getElementById("status").disabled = true;
	}
}


function empty(data, x)
{
	var data1 = get(data).trim();
	if(x=="n")
	{
		if (data1 == "" || data1 == null || isNaN(data1))
		{
			set(data,0);
			return 0;
		}			
		else
		{
			set(data,parseInt(data1));
			return parseInt(data1);
		}
	}
	else if(x=="f")
	{
		if (data1 == "" || data1 == null || isNaN(data1))
		{
			set(data,"0.00");
			return 0;
		}			
		else
		{
			data1 = (parseFloat(data1)).toFixed(2);
			set(data,parseFloat(data1));
			return parseFloat(data1);
		}
	}
	else if(x=="s")
	{
		if (data1 == "" || data1 == null)
		{
			set(data,"");
			return "";
		}
		else
		{
			set(data,data1);
			return data1;
		}
	}
	
}


function set(id, val)
{
	document.getElementById(id).value=val;
}

function get(id)
{
	return document.getElementById(id).value;
}

function clr(id)
{
	document.getElementById(id).value="";
}

function radio_url(x)
{
	document.getElementById("br_edit").href="branch_edit.php?code="+x.value;
	document.getElementById("br_del").href="branch_delete.php?code="+x.value;
	
}

function radio_user_url(x)
{
	document.getElementById("ur_del").href="user_delete.php?code="+x.value;
	document.getElementById("ur_chpass").href="user_change_password.php?code="+x.value;
}
function radio_vendor_url(x)
{
	document.getElementById("ur_edit").href="vendor_edit.php?code="+x.value;
	document.getElementById("ur_del").href="vendor_delete.php?code="+x.value;
}
function chk_service()
{
	empty("amount","n");
	empty("a_amount","n");
	return;
}

function nobranch()
{
	if(document.getElementById("des_a").checked == true)
		document.getElementById("s_ubr").style.visibility = "hidden";
	else
		document.getElementById("s_ubr").style.visibility = "visible";
}

function same_pass()
{
	name = get("uname").trim();
	uname = get("usname").trim();
	pass1 = get("pass1").trim();
	pass2 = get("pass2").trim();
	
	if(name=="" || name == null)
	{
		alert("Name is Empty !!!");
		document.getElementById("uname").focus();
		return;
	}	
	else if(uname=="" || uname == null)
	{
		alert("User Name is Empty !!!");
		document.getElementById("usname").focus();
		return;
	}
	else if(pass1=="" || pass1 == null)
	{
		alert("Password is Empty !!!");
		document.getElementById("pass1").focus();
		return;
	}
	else if(pass1==pass2)
	{
		chk_uname(uname);
	}
	else
	{
		alert ("Password Mismatch...");
		set("pass1","");
		set("pass2","");
		document.getElementById("pass1").focus();
	}
}	

function same_pass_cng()
{
	name = get("uname").trim();
	uname = get("usname").trim();
	pass1 = get("pass1").trim();
	pass2 = get("pass2").trim();
	
	if(name=="" || name == null)
	{
		alert("Name is Empty !!!");
		document.getElementById("uname").focus();
		return;
	}	
	else if(uname=="" || uname == null)
	{
		alert("User Name is Empty !!!");
		document.getElementById("usname").focus();
		return;
	}
	else if(pass1=="" || pass1 == null)
	{
		alert("Password is Empty !!!");
		document.getElementById("pass1").focus();
		return;
	}
	else if (pass1 != pass2)
	{
		alert ("Password Mismatch...");
		set("pass1","");
		set("pass2","");
		document.getElementById("pass1").focus();
	}
	else
		document.getElementById("user_form").submit();

}	

function get_sub()
{
	var sprice	= empty("sl_price","n");
	var qty = empty("qty","n");
	set("sub_total",(sprice * qty));
	document.getElementById("add_btn").focus();
}

function get_sub1()
{
	var sprice	= empty("a_sl_price","n");
	var qty = empty("a_qty","n");
	set("a_sub_total",(sprice * qty));
	document.getElementById("add_btn").focus();
}

function billdisp()
{

	var count = document.getElementById("bill_disp").rows.length;
	var code =  empty("u_code","s");
	var prod = empty("prod_ajax","s");
	var brand = empty("brand_ajax","s");
	var model = empty("model_ajax","s");
	var imei1 = empty("imei1","s");
	var imei2 = empty("imei2","s");
	var imei3 = empty("imei3","s");
	var sprice = empty("sl_price","n");
	var per_tax = parseFloat(get("per_tax"));
	sprice = ((sprice / (100+per_tax) ) *100).toFixed(2);

	var qty = 1;
	var tprice = sprice * qty;
	if(sprice==0)
	{
		alert("Dont Leave Price & Qty Empty !");
		if(sprice==0) document.getElementById("sl_price").focus();
		return;
	}
	
	var hid_val = empty("hid_tot","f");
	var total = parseFloat(hid_val) + tprice;
	set("hid_tot",total);	
	
	var new_row = "<tr class='bil_row'><td><input type=hidden name='himei1_"+count+"' value='"+imei1+"'><input type=hidden name='himei2_"+count+"' value='"+imei2+"'><input type=hidden name='himei3_"+count+"' value='"+imei3+"'></td><td> <input type=text name='code"+count+"' value='"+code+"'></td><td><input class='bil_tbox' type=text name='prod"+count+"' value='"+prod+"'><input type=text class='bil_tbox' name='brand"+count+"' value='"+brand+"'><input type=text class='bil_tbox' name='model"+count+"' value='"+model+"'><input type=text class='bil_tbox' name='color"+count+"' value=' '></td><td><input class='right_align'  style='width:80px;' type=text name='sprice"+count+"' value='"+sprice+"'></td>	<td><input style='text-align:center;width:129px;' type=text readyonly name='qty"+count+"' value='1'></td><td><input class='right_align' id='tot"+count+"' type=text name='tprice"+count+"' style='width:170px;' value='"+sprice+"'></td></tr>";

	document.getElementById("bill_disp").innerHTML += new_row;
	set("subb_tot",total);
		
	var act_price = (total).toFixed(2);
	
	var tax = (act_price * (per_tax/100)).toFixed(2);
	document.getElementById("taxb").value= tax;

	
	var cur_dis = parseInt((document.getElementById("disb").value).trim());
	if(cur_dis == "")
		cur_dis = 0;

	
	document.getElementById("grdb_tot").value = Math.round((parseFloat(act_price) + parseFloat(tax) ) - parseFloat(cur_dis)).toFixed(2);
	
	var row = empty("tot_row","n");
	row = row + 1;
	set("tot_row",row);
	

	clr("u_code");
	clr("prod_ajax");
	clr("brand_ajax");
	clr("model_ajax");
	clr("imei1");
	clr("imei2");
	clr("imei3");
	clr("sl_price");

	document.getElementById("imei1").focus();

}

function billdisp1()
{

	var count = document.getElementById("bill_disp").rows.length;
//	var code =  empty("a_u_code","s");
	var prod = empty("a_prod_ajax","s");
	var brand = empty("a_brand_ajax","s");
	var model = empty("a_model_ajax","s");
	var color = empty("a_color_ajax","s");

	var sprice = empty("a_sl_price","n");
	var per_tax = parseFloat(get("per_tax"));
	sprice = ((sprice / (100+per_tax) ) *100).toFixed(2);
	
	var qty = empty("a_qty","n");
	var tprice = sprice * qty;
	
	if((sprice==0) || (qty==0))
	{
		alert("Dont Leave Price & Qty Empty !");
		if(sprice==0) document.getElementById("a_sl_price").focus();
		else if(qty==0) document.getElementById("a_qty").focus();

		return;
	}
	
	var hid_val = empty("hid_tot","f");
	var total = parseFloat(hid_val) + tprice;
	set("hid_tot",total);	

	
	var act_price = (total).toFixed(2);
	
	var new_row = "<tr class='bil_row'><td><input type=hidden name='himei1_"+count+"' value='#'><input type=hidden name='himei2_"+count+"' value='#'><input type=hidden name='himei3_"+count+"' value='#'></td><td><input type=text name='code"+count+"' value=''></td><td><input class='bil_tbox' type=text name='prod"+count+"' value='"+prod+"'><input type=text class='bil_tbox' name='brand"+count+"' value='"+brand+"'><input type=text class='bil_tbox' name='model"+count+"' value='"+model+"'><input type=text class='bil_tbox' name='color"+count+"' value='"+color+"'></td><td><input class='right_align'  style='width:80px;' type=text name='sprice"+count+"' value='"+sprice+"'></td>	<td><input style='text-align:center;width:129px;' type=text readyonly name='qty"+count+"' value='"+qty+"'></td><td><input class='right_align' id='tot"+count+"' type=text name='tprice"+count+"' style='width:170px;' value='"+tprice.toFixed(2)+"'></td></tr>";

	document.getElementById("bill_disp").innerHTML += new_row;
	set("subb_tot",act_price);

	var cur_dis = parseInt((document.getElementById("disb").value).trim());
	if(cur_dis == "")
		cur_dis = 0;

	var tax = (act_price * (per_tax/100)).toFixed(2);
	document.getElementById("taxb").value= tax;
	
	document.getElementById("grdb_tot").value = Math.round((parseFloat(act_price) + parseFloat(tax) ) - parseFloat(cur_dis)).toFixed(2);
	
	var row = empty("tot_row","n");
	row = row + 1;
	set("tot_row",row);
	

//	clr("a_u_code");
//	clr("a_prod_ajax");
	clr("a_brand_ajax");
	clr("a_model_ajax");
	clr("a_color_ajax");
	clr("a_sl_price");
	clr("a_qty");
	clr("a_sub_total");

	document.getElementById("a_prod_ajax").focus();

}
function ser_sta(x)
{
	if(x == "Return")
	{
		set("ucost",0);
		set("uamount",0);
		document.getElementById("datet").readOnly = true;
		document.getElementById("ucost").readOnly = true;
		document.getElementById("uamount").readOnly = true;
		document.getElementById("desc").focus();		
	}
	else
	{
		document.getElementById("datet").readOnly = false;
		document.getElementById("ucost").readOnly = false;
		document.getElementById("uamount").readOnly = false;
		document.getElementById("datet").focus();		

	}
	
	
}
function tot_dis()
{
	var tot = empty("subb_tot","f");
	var dis = empty("disb","f");
	var tax = empty("taxb","f");
	var g_tot = empty("grdb_tot","f");
	var paid = empty("paid","f");
	var bal = empty("balance","f");	
	var tax_per = empty("per_tax","f");
	var disc_per = empty("per_disc","f");
	
	var cal_tax = (tot * (tax_per/100)).toFixed(2);
	set("taxb",cal_tax);
	set("disb",(dis).toFixed(2));
	g_tot = Math.round(parseFloat(tot) + parseFloat(cal_tax) - dis).toFixed(2);
	set("grdb_tot",g_tot);
	
	set("paid",(paid).toFixed(2));
	
	var bal = (g_tot - paid).toFixed(2);
	set("balance",bal);
	
	if(paid > 0)
	document.getElementById("gen_bil_btn").disabled = false;
	else
	document.getElementById("gen_bil_btn").disabled = true;
}

function calc_disc()
{
	var disc_per = empty("per_disc","f");
	var tot = empty("subb_tot","f");
	var tax = empty("taxb","f");
	var discount = ((parseFloat(tot)+parseFloat(tax)) * (disc_per/100)).toFixed(2);
	set("disb",discount);
	calc_tax();
	//tot_dis();
}

function calc_tax()
{
	var tax_per = empty("per_tax","f");
	var tot = empty("subb_tot","f");
	var dis = empty("disb","f");
	var cal_tax = ((tot - dis) * (tax_per/100));
	set("taxb",cal_tax);
	tot_dis();
}

function retbal()
{

	var tot = empty("uamount","n");
	var adv = empty("a_amount","n");
	var paid = empty("rpaid","n");
	var disc = empty("rdiscount","n");
	var rbal = (tot - adv -  paid - disc);
	set("rbal",rbal);
}

function retbal_return()
{

	var tot = empty("uamount","n");
	var tot = -tot;
	var paid = empty("rpaid","n");
	var disc = empty("rdiscount","n");
	var rbal = (tot +  paid + disc);
	set("rbal",rbal);
}

function get_accessory()
{
	document.getElementById("mobile_bill").className = "hide";
	document.getElementById("access_bill").className = "fs_bill";	
	bill_data1();
}

function get_mobile()
{
	document.getElementById("access_bill").className = "hide";
	document.getElementById("mobile_bill").className = "fs_bill";
	document.getElementById("u_code").focus();
}

function tprice_acc(tp, sp)
{

	var tprice = empty(tp,"n");
	var sprice = empty(sp,"n");
	var brand = get("brand_ajax");	
	var pdate = get("pdate");
	var qty = get("qty");

	if(brand == "" || brand == null)
	{
		alert ("Brand Cannot be Empty");
		document.getElementById("prod_ajax").focus();
		return false;
	}
	else if(qty == "" || qty == null)
	{
		alert ("Quantity Cannot be Empty");
		set("qty","");
		document.getElementById("qty").focus();
		return false;
	}	
	else if(pdate == "" || pdate == null)
	{
		alert ("Date Cannot be Empty");
		document.getElementById("pdate").focus();
		return false;
	}
	else if (tprice == "" || tprice == 0)
	{
		alert ("Trade Price should not be EMPTY ");
		set(tp,"");
		document.getElementById(tp).focus();
		return false;
	}
	else if (sprice == "" || sprice == 0 )
	{
		alert ("Sale Price should not be EMPTY ");
		set(sp,"");
		document.getElementById(sp).focus();
		return false;
	}
	else if(sprice < tprice)
	{
		alert ("Sales Price Must be Higher than Trade Price");
		set(sp,"");
		document.getElementById(sp).focus();
		return false;
	}
	else 
		return true;

}

function tprice_mob(tp, sp)
{

	var tprice = empty(tp,"n");
	var sprice = empty(sp,"n");
	var brand = get("brand_ajax");	
	var pdate = get("pdate");
	if(brand == "" || brand == null)
	{
		alert ("Brand Cannot be Empty");
		document.getElementById("prod_ajax").focus();
		return false;
	}
	else if(pdate == "" || pdate == null)
	{
		alert ("Date Cannot be Empty");
		document.getElementById("pdate").focus();
		return false;
	}
	else if (tprice == "" || tprice == 0)
	{
		alert ("Trade Price should not be EMPTY ");
		set(tp,"");
		document.getElementById(tp).focus();
		return false;
	}
	else if (sprice == "" || sprice == 0 )
	{
		alert ("Sale Price should not be EMPTY ");
		set(sp,"");
		document.getElementById(sp).focus();
		return false;
	}
	else if(sprice < tprice)
	{
		alert ("Sales Price Must be Higher than Trade Price");
		set(sp,"");
		document.getElementById(sp).focus();
		return false;
	}
	else 
	{
		var rit = confirm ("Shall I update Now...");
		if(rit==true)
			return true;
		else 
			return false;
	}
}


function getval(x)
{
	var y = get(x);
	if(y=="" || y==null)
		return parseInt(0);
	else
		return parseInt(y);
}

function ac_tot()
{
	var op_bal = getval("op_bal");
	var in_cash = getval("in_cash");
	var sales = getval("sales");
	var service = getval("service");
	var recharge = getval("srecharge");
	var oth_inc = getval("oth_inc");
	var s_return = getval("s_return");
	var exp = getval("exp");
	var oth_otc = getval("oth_otc");

	var tot_inc = op_bal + in_cash + sales + service + recharge + oth_inc;
	var tot_otc = s_return + exp + oth_otc;
	var total = tot_inc - tot_otc;
	
	set("tot",total);
	var ho = getval("amt_ho");
	bal = total - ho;	
	set("amt_bal",bal);
	
}

function ac_bal()
{
	var tot = getval("tot");
	var ho = getval("amt_ho");
	var bal = tot - ho;
	set("amt_bal",bal);
}