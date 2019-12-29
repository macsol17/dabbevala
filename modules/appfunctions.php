<?php
if(isset($_POST["func"])){
	$_POST["func"]($_POST["data"], $_POST["table"]);
}

function utf8ize($d) {
    if (is_array($d)) {
        foreach ($d as $k => $v) {
            $d[$k] = utf8ize($v);
        }
    } else if (is_string ($d)) {
        return utf8_encode($d);
    }
    return $d;
}


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
function clean($string) {
   $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.

   return preg_replace('/[^A-Za-z0-9@.\-]/', '', $string); // Removes special chars.
}

function dbselect($data, $table){
$servername = "localhost";
$username = "dabbevala";
$password = "dabbevala@2019";
$dbname = "dabbevala";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "SELECT * FROM ".$table." WHERE ".$data;
//echo "<script>alert($sql)</script>";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) <= 0) {
	$result="No Results";
}else{
	$s=0;
	while($row = mysqli_fetch_assoc($result)) {
        $r[$s]=$row;
		$s++;
    }
	$result=$r;
	
}
if(!($result)){
	$result="No Results";
}
if(isset($_POST["func"])){
$e=json_encode(utf8ize($result));
echo $e;
}else{
return $resultT;	
}

$conn->close();
}

function dbinsert($data, $table){
$servername = "localhost";
$username = "dabbevala";
$password = "dabbevala@2019";
$dbname = "dabbevala";
$x = (object)array();
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "INSERT INTO ".$table." ".$data;
if (mysqli_query($conn, $sql)) {
	$x->lastinserted= mysqli_insert_id($conn);
	$x->status= "New record created successfully";
    $x=json_encode($x);
} else {
	$x->lastinserted= " ";
	$x->status= "Error: " . $sql . "<br>" . mysqli_error($conn);
    $x=json_encode($x);
}
if(isset($_POST["func"])){
echo $x;
}else{
return $x;	
}
$conn->close();
}
function dbupdate($data, $table){
$servername = "localhost";
$username = "dabbevala";
$password = "dabbevala@2019";
$dbname = "dabbevala";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "UPDATE ".$table." ".$data;

if (mysqli_query($conn, $sql)) {
    return "Record updated successfully";
} else {
    return "Error updating record: " . mysqli_error($conn);
}

$conn->close();
}


function dbdelete($data, $table){
$servername = "localhost";
$username = "dabbevala";
$password = "dabbevala@2019";
$dbname = "dabbevala";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "DELETE FROM $table WHERE $data";

if (mysqli_query($conn, $sql)) {
    echo "<script>alert('Record deleted successfully');</script>";
} else {
    echo "Error deleting record: " .mysqli_error($conn);
}
return 0;
$conn->close();
}
?>