<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "form";


    $con = new mysqli($host,$user,$pass,$db);
    if(!$con) {
        echo "There are some problem while connectin the database";
    }
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];


    $qry = "INSERT INTO `table`( `name`, `email`, `phone`, `msg`) VALUES ('$name','$email','$phone','$msg')";


    $insert = mysqli_query($con,$qry);


    if(!$insert) {
        echo "There are some problem while inserting data";
    }
    else {
        echo "Data Inserted";
    }
?>
