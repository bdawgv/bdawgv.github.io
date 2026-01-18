<?php
// Check if the form was submitted using the specific submit button's name
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$message = htmlspecialchars($_POST['msgtru']);
	$file = 'inbox.txt';
// Format the data for storage
$current_data = "Begin message\n $message\n End message\n \n";

// Append the new data to the file
file_put_contents($file, $current_data, FILE_APPEND | LOCK_EX);
 }
?>

