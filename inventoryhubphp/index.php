<?php
    declare(strict_types=1); 
    spl_autoload_register(function($class){ 
        require __DIR__ . "/src/$class.php"; 
    }); 

    header('Content-Type: application/json'); 
    header('Access-Control-Allow-Origin: *');


    $parts = explode("/", $_SERVER['REQUEST_URI']); 

    $controller = new ProductController(); 

    $controller -> processRequest($_SERVER['REQUEST_METHOD'], $parts[2]); 

?>