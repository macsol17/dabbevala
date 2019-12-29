<?php
include "functions.php";
$dta="name ='".$_POST["pname"]."' AND vendorname ='".$_POST["venname"]."' AND purchaserate='".$_POST["purrate"]."'";
$tbl="inventory";
$vrbl="*";
$result=rtv($vrbl,$tbl,$dta,$conn);
$result=json_decode($result);
if ($result[0]=="0 Results") {
	$redirecturl="../admin/inventory.html";
	$dta= "(name, vendorname, purchaserate, totalquantity, todayquantity,wasted, stolen, date) VALUES ('".$_POST["pname"]."', '".$_POST["venname"]."', '".$_POST["purrate"]."','".$_POST["quantity"]."', '".$_POST["quantity"]."','0', '0', '".date('d/m/Y')."')";
	$tbl="inventory";
	inst($tbl, $dta, $conn, $redirecturl);
	//echo $dta;
}else{
	var_dump($result);	
	$redirecturl="../admin/inventory.html";
	$tid=$result[0]->id;
	$ttq=(int)$result[0]->totalquantity + $_POST["quantity"];
	$dta="totalquantity='".$ttq."', todayquantity='".$_POST["quantity"]."' WHERE id=".$tid;
	$tbl="inventory";
	updt($tbl,$dta,$conn,$redirecturl);
	echo $tid;
}

?>