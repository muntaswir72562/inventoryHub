<?php
 require('cors.php');
 cors();
 
$xml = new DOMDocument();
$xml->load('data/product.xml');
 
 //here you can apply the schema to validate
$is_valid_xml = $xml->schemaValidate('data/product.xsd'); // path to xsd file

// if (!$is_valid_xml){
//     echo '<b>Invalid XML:</b> validation failed<br>';
// }else{
//     echo '<b>Valid XML:</b> validation passed<br>';
// }

$xsl = new DOMDocument;
$xsl->load('data/product.xsl');
 
$proc = new XSLTProcessor();
$proc->importStyleSheet($xsl);
 
echo $proc->transformToXML($xml);

?>