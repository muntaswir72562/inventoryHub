<?php

require('cors.php');
cors();

// echo json_decode(file_get_contents('php://input'), true);
// // $data = $_POST;
// $data = '{"name":"Umar","age":"30", "payload", "'.implode(" ",$_REQUEST).' "}';

// header("Content-Type: application/json");
echo json_encode(file_get_contents('php://input'));


exit();
?>