<?php 
require('cors.php');
cors();

$title = ''; 
$price = 0; 
$quantity = 0; 

$xmlFile = "data/tobuy.xml";

if(isset($_POST['title'])){ 
    $title = $_POST['title']; 
    $price = $_POST['price']; 
    $quantity = $_POST['quantity']; 

}

if (file_exists($xmlFile)) {
    
    
    $xml->load($xmlFile);

    $productElem = $xml->createElement('Product'); 
    $titleElem = $xml->createElement('title', $title); 
    $priceElem = $xml->createElement('price', $price); 
    $quantityElem = $xml->createElement('quantity', $quantity); 

    $productElem->appendChild($titleElem); 
    $productElem->appendChild($priceElem); 
    $productElem->appendChild($quantityElem); 

    $xml->documentElement->appendChild($productElem); 

    $xml->save($xmlFile);
    echo'ok';
} 
else {

    $xml = new DOMDocument(); 

    $xml = new DOMDocument();
    $xml->encoding = 'utf-8';
    $xml->xmlVersion = '1.0';
    $xml->formatOutput = true;

    $root = $xml->createElement('products'); 
    
    $productElem = $xml->createElement('product'); 

    $attr_prod_id = new DOMAttr('id', 'p001');
    $productElem->setAttributeNode($attr_prod_id);

    $titleElem = $xml->createElement('title', $title); 
    $priceElem = $xml->createElement('price', $price); 
    $quantityElem = $xml->createElement('quantity', $quantity); 

    $productElem->appendChild($titleElem); 
    $productElem->appendChild($priceElem); 
    $productElem->appendChild($quantityElem); 

    $root->appendChild($productElem); 
    $xml->appendChild($root); 
    $xml->save($xmlFile);
    echo "File created"; 
}


?> 