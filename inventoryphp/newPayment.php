<?php
require('cors.php');
cors();

$date = "";
$sName = "";
$mobile = "";
$email = "";
$inv = "";
$amount = 0;
$status = "";
$method = "";


if (isset($_POST['sName'])) {
    $date = $_POST['date'];
    $sName = $_POST['sName'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $inv = $_POST['inv'];
    $amount = $_POST['amount'];
    $status = $_POST['sts'];
    $method = $_POST['method'];

    $xml = new DOMDocument();
    $xml->load("data/payment.xml");


    if ($xml === false) {
        echo "Failed loading XML: ";
        foreach (libxml_get_errors() as $error) {
            echo "<br>", $error->message;
        }
    } else {
      
        $payment = $xml->createElement('payment');

        $date_xml = $xml->createElement("date", $date);
        $supplierName=$xml->createElement("supplierName", $sName);

        $contact=$xml->createElement('contact');
        $mobile_xml=$xml->createElement("mobile", $mobile);
        $email_xml=$xml->createElement("email", $email);

        $invoice=$xml->createElement("invoice");
        $invoice->setAttribute("id", $inv);

        $amount_xml=$xml->createElement("amount", $amount);
        $status_xml=$xml->createElement("status", $status);

        $method_xml=$xml->createElement("method");
        $method_xml->setAttribute("type", $method);

        $payment->appendChild($date_xml);
        $payment->appendChild($supplierName);

        $contact->appendChild( $mobile_xml);
        $contact->appendChild( $email_xml);

        $payment->appendChild($invoice);
        $payment->appendChild($amount_xml);
        $payment->appendChild($status_xml);
        $payment->appendChild($method_xml);
        
        $xml->documentElement->appendChild($payment);
        $xml->save('data/payment.xml');

        echo"ok";
    }
} else {
    echo "An error has occured";
}
//var_dump($_POST)
