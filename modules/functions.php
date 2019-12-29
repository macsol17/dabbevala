<?php
//Database config details
$username= "root";
$pass= "";
$host="localhost";
$dbname = "dabbevala";

// Create connection
$conn = mysqli_connect($host, $username, $pass, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


function del($tbl, $cnd, $conn){

	// sql to delete a record
$sql = "DELETE FROM $tbl WHERE $cnd";

if (mysqli_query($conn, $sql)) {
    echo "<script>alert('Record deleted successfully');</script>";
} else {
    echo "Error deleting record: " .mysqli_error($conn);
}
return 0;
}

function updt($tbl,$dta,$conn,$redirecturl){
	$sql = "UPDATE $tbl SET $dta";

if (mysqli_query($conn, $sql)) {
   echo "<script>window.location.href='".$redirecturl."';</script>";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

return 0;
}

// Function to insert data

function inst($tbl, $dta, $conn,$redirecturl){
	$sql = "INSERT INTO $tbl $dta";

if (mysqli_query($conn, $sql)) {
    echo "<script>window.location.href='".$redirecturl."';</script>";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

return 0;
}


// Function to retrieve data

function rtv($vrbl, $tbl, $cnd, $conn){

		$sql = "SELECT $vrbl FROM $tbl WHERE $cnd";
		$result = mysqli_query($conn, $sql);
		$count=0;
		if (mysqli_num_rows($result) > 0) {
		    // output data of each row
		    while($row = mysqli_fetch_assoc($result)) {
		    	//var_dump($row);
		    	$tmp[$count]=$row;
		    	$count++;
		        //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
		    }
		} else {
		    $tmp[0]="0 Results";
		}
		
		return json_encode($tmp);


}

//$var=rtv("*", "dvusers", "password='macsol@123'", $conn);
//var_dump($var);
?>

?>