<?php
libxml_use_internal_errors(true);
require('cors.php');
cors();
$xml=simplexml_load_file("./data/payment.xml") or die("Error: Cannot create object");
if (isset($_GET['id'])){
    //echo $_GET['id'];
    $id = intval($_GET['id']);
    
// Find the node to delete
$node = $xml->xpath('/payments/payment['.$id.']');
echo json_encode($node);
// Remove the node
unset($node[0][0]);

// Save the updated XML file
$xml->asXML('data/payment.xml');
}else{
    echo "an errror has occured";
}

?>