<?php
include "appfunctions.php";
//var_dump($_POST);
//$redirecturl="../admin/plans.html";
//echo $_POST['table'];
dbinsert($_POST['data'], $_POST["table"]);
?>