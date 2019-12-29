<?php
include "functions.php";
if (isset($_POST['addusr'])) {
	$redirecturl='../admin/adduser.html';
	$dta= "(firstname, lastname, username, password, ph,address, city, state, country, zipcode, email, mainbalance, rewardbalance, type) VALUES ('".$_POST["fname"]."', '".$_POST["lname"]."', '".$_POST["usrname"]."','".$_POST["pass"]."', '".$_POST["uph"]."','".$_POST["uadd"]."', '".$_POST["ucity"]."','".$_POST["ustate"]."','".$_POST["ucountry"]."','".$_POST["uzipcode"]."', '".$_POST["uemail"]."', '".$_POST["walbal"]."', '".$_POST["promobal"]."', '".$_POST["utyp"]."')";

	//echo $dta;
	$tbl= "dvusers";
	inst($tbl, $dta, $conn, $redirecturl);

}
?>