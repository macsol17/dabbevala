<?php
include "functions.php";




if (isset($_POST['addmnu'])) {

	$target_dir = "../images/uploads/";
	$redirecturl='../admin/addmenu.html';
	$target_file = $target_dir . basename($_FILES["imguploaded"]["name"]);
	$uploadOk = 1;
	$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
	move_uploaded_file($_FILES["imguploaded"]["tmp_name"], $target_file);

	echo "<script>console.log(".json_encode($_POST["menu_list"]).");</script>";
	
	$dta= "(name, imgurl, menu, time, day, category, price, date) VALUES ('".$_POST["mname"]."', 'images/uploads/".basename($_FILES["imguploaded"]["name"])."', '".json_encode($_POST["menu_list"])."', '".$_POST["mtime"]."', '".$_POST["mday"]."', '".$_POST["mcatg"]."', '".$_POST["mprc"]."', '".date("d/m/Y")."')";
	$tbl= "menu";
	inst($tbl, $dta, $conn, $redirecturl);

}

?>