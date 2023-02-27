<?php 
require('cors.php');
cors();

$title = ''; 
$price = 0; 
$quantity = 0; 

$xmlFile = "/data/tobuy.xml";

if(isset($_POST['title'])){ 
    $title = $_POST['title']; 
    $price = $_POST['price']; 
    $quantity = $_POST['quantity']; 
}

if (file_exists($xmlFile)) {
    $xml = new DOMDocument();
    $xml->load($xmlFile);

    $productElem = $xml->createElement('Product'); 
    $titleElem = $xml->createElement('title', $title); 
    $priceElem = $xml->createElement('price', $price); 
    $quantityElem = $xml->createElement('quantity', $quantity); 

    $product->appendChild($titleElem); 
    $product->appendChild($priceElem); 
    $product->appendChild($quantityElem); 

    $xml->documentElement->appendChild($product); 

    $xml->save($xmlFile);
    echo'ok';
} 
else {

    echo $title; 
    
    $xml = new DOMDocument(); 
    $root = $xml->createElement('Products'); 
    
    $productElem = $xml->createElement('Product'); 
    $titleElem = $xml->createElement('title', $title); 
    $priceElem = $xml->createElement('price', $price); 
    $quantityElem = $xml->createElement('quantity', $quantity); 

    $product->appendChild($titleElem); 
    $product->appendChild($priceElem); 
    $product->appendChild($quantityElem); 

    $xml->documentElement->appendChild($product); 
    
    $xml->save($xmlFile);
    echo "ok"; 
}


?> 