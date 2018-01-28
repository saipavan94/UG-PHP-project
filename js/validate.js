//----- add_owner_detail.php --------------

function owner_val()
{
	var name=document.getElementById('name').value;
	var phone=document.getElementById('phone').value;
	var address=document.getElementById('addr').value;
	var uname=document.getElementById('uname').value;
	var upass=document.getElementById('upass').value;
   if((name !='') && (phone !='') && (address !='') && (uname !='') && (upass !=''))
   {
	  		document.getElementById('loginForm').submit();


   }
  else
   {
	         alert ('Please Enter Full Detail');

   }
}

function chname(txt)
{
 var val=txt.value;
 var ch=/^[A-Za-z]+$/;
 if(!(val.match(ch)))
 {
	alert('Alphapet Only Accepted');
	txt.focus();
	return false;

 }
}
function chphone(txt)
{
 var val=txt.value;
 var ch=/^[0-9]+$/;
 if(!(val.match(ch)))
 {
 	alert('Invalid Phone Number');
	txt.focus();
	return false;

 }
}
function chemail(txt)
{
	val=txt.value;
	var ch=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!(val.match(ch)))
	{
 
 	alert('Invalid Email');
	txt.focus();
	return false;

 }
}

//------------- add_detail.php -----------------------

function add_val()
{
 var a=document.getElementById('name').value;
 var b=document.getElementById('sts').value;
 var c=document.getElementById('city').value;
 var d=document.getElementById('loc').value;
 var e=document.getElementById('addr').value;
 var f=document.getElementById('squ').value;
 var g=document.getElementById('lm').value;
 var h=document.getElementById('rs').value;
 var i=document.getElementById('bus').value;
 var j=document.getElementById('hos').value;

 if((a !='') && (b !='') && (c !='') && (d !='') && (e !='') && (f !='') && (g !='') && (h !='') && (i !='') && (j !=''))

 {

	document.getElementById('loginForm').submit();
 }
 else
 {
  alert('Please Enter Full Detail');
 }
}