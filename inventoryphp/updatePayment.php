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

//var_dump($_POST);

$xml = simplexml_load_file('data/payment.xml');

if (isset($_POST['sName'])) {

    $date = $_POST['date'];
    $sName = $_POST['sName'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $inv = $_POST['inv'];
    $amount = $_POST['amount'];
    $status = $_POST['sts'];
    $method = $_POST['method'];
    $id = intval($_POST['id']);
// Update the data of the first payment
$xml->payment[$id]->date = $date;
$xml->payment[$id]->supplierName = $sName;
$xml->payment[$id]->contact->mobile =$mobile;
$xml->payment[$id]->contact->email = $email;
$xml->payment[$id]->invoice['id'] = $inv ;
$xml->payment[$id]->amount = $amount;
$xml->payment[$id]->status =  $status;
$xml->payment[$id]->method['type'] = $method;

// Save the updated XML file
$xml->asXML('data/payment.xml');

echo "ok";

}else {
    echo "An error has occured";
}
