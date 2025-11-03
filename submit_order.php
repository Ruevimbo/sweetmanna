<?php
// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Save order data (e.g., email it or save to database)
$name = $data['name'];
$address = $data['address'];
$phone = $data['phone'];

// For testing, just return success
echo "Order received from $name";
?>
