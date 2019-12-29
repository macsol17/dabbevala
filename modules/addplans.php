<?php
include "functions.php";
//var_dump($_POST);
$redirecturl="../admin/plans.html";
//echo $_POST['table'];
inst($_POST['table'], $_POST["data"], $conn, $redirecturl);
?>