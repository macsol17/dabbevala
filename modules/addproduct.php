<?php
include "functions.php";
if (isset($_POST['addprd'])) {
	$target_dir = "../images/uploads/";
	$redirecturl='../admin/addproducts.html';
	$target_file = $target_dir . basename($_FILES["imguploaded"]["name"]);
	$uploadOk = 1;
	$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
	move_uploaded_file($_FILES["imguploaded"]["tmp_name"], $target_file);
	//echo "<script>alert('".basename($_FILES["imguploaded"]["name"])."')</script>";
	//var_dump($_POST);
	if (!isset($_POST["ptag"])) {
		$_POST["ptag"]= " "; 
	}
	$dta= "(name, imgurl, recipe, tag, category) VALUES ('".$_POST["pname"]."', 'images/uploads/".basename($_FILES["imguploaded"]["name"])."', '".$_POST["prcp"]."', '".$_POST["ptag"]."', '".$_POST["pcatg"]."')";
	$tbl= "product";
	inst($tbl, $dta, $conn, $redirecturl);

}

?>