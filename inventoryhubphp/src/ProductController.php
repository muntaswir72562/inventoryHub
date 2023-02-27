<?php

class ProductController
{
    public function processRequest(string $method, string $endpoint):void { 
        $this->processCollection($method, $endpoint); 
    }

    private function processCollection(string $method, string $endpoint):void 
    {
        $xmlData = ''; 
        $compressedXMLData = array(); 

        switch($method)
        {
            case 'GET':
                switch ($endpoint) {
                    case 'dashboard':
                        $urls = [
                            './data/sales_customer.xml',
                            './data/payment.xml', 
                            './data/purchaseOrder.xml', 
                            './data/supplier.xml'
                        ]; 

                        foreach($urls as $index => $url) {
                            $xml = simplexml_load_file($url) or die('cannot create object');
                            $compressedXMLData [] = array ($this->processXML($index, $xml)); 
                        }
                        $xmlData = $compressedXMLData; 
                        break;
                    case 'invoice': 
                        $xmlData = simplexml_load_file('./data/invoice.xml'); 
                        break;
                    default:
                    $urls = [
                        './data/sales_customer.xml',
                        './data/payment.xml', 
                        './data/purchaseOrder.xml',
                        './data/supplier.xml'
                    ]; 

                    foreach($urls as $index => $url) {
                        $xml = simplexml_load_file($url) or die('cannot create object');
                        $compressedXMLData [] = array ($this->processXML($index, $xml)); 
                    }
                    $xmlData = $compressedXMLData;
                    break;
                }
            break; 
        }

        echo json_encode($xmlData); 

    }

    private function processXML(int $index, SimpleXMLElement $xml):array
    {   
        $quantity = 0; 
        $amount = ''; 
        $cost = 0; 
        $purchase_quantity = 0; 
        $purchase_amount = 0;
        $processedXMLData = array();  

        switch($index){
            case 0: 
               foreach($xml->children() as $Sale_Order){
                $quantity = (int) $Sale_Order -> item -> quantity; 
                $amount = (string) $Sale_Order -> item -> amount; 
                $processedXMLData[] = array( 
                    'quantity' => $quantity, 
                    'amount' => $amount
                ); 
               }
               break; 
            case 1:
                foreach ($xml->children() as $payment) {
                    $cost = (int) $payment -> amount; 
                    $processedXMLData[] = array(
                            'cost' => $cost
                    );
                }
                break;
            case 2:
                foreach ($xml->children() as $purchase_order) {
                    $purchase_quantity = (int) $purchase_order -> item -> quantity; 
                    $purchase_amount = (int) $purchase_order -> item -> amount; 
                    $processedXMLData[] = array(
                        'purchase_quantity' => $purchase_quantity, 
                        'purchase_amount' => $purchase_amount 
                    );
                }
                break; 
            case 3:
                foreach($xml ->children() as $supplier) { 
                    $supplier_id = $supplier['id']; 
                    $processedXMLData[] = array(
                        'supplier_id' => (string) $supplier_id
                    ); 
                }
        }

        return $processedXMLData; 
    }
}

?>