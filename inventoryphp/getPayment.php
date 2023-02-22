<?php
libxml_use_internal_errors(true);
require('cors.php');
cors();
$xml=simplexml_load_file("./data/payment.xml") or die("Error: Cannot create object");
if (isset($_GET['id'])){

$id=intval($_GET['id']);

$payment=$xml->payment[$id];

$date=$payment->date;
$sName=$payment->supplierName;
$mobile=$payment->contact->mobile;
$email=$payment->contact->email;
$inv=$payment->invoice['id'];
$amt=$payment->amount;
$sts=$payment->status;
$method=$payment->method['type'];

$data= json_encode(array($date, $sName, $mobile,$email,$inv,$amt,$sts,$method));
echo $data;
}else{


$row="";
$i=0;
$table="<table><tr><th>Date</th><th>Company Name</th><th>Invoice Id</th><th>Amount</th><th>Type</th><th>Status</th><th>Actions</th></tr>";
foreach($xml->children() as $payment) {
    $row.="<tr><td>".$payment->date."</td><td>".$payment->supplierName."</td><td>".$payment->invoice['id']."</td><td>".(int)$payment->amount."</td><td>".$payment->method['type']."</td><td>".$payment->status."</td><td><a href='/updatePayment/".$i."'>Update</a><br/><a onclick='deleteXml(".$i.")' href='#'>Delete</a></td></tr>";
    $i++;
    }

    $table.=$row;
echo $table;
}

?>