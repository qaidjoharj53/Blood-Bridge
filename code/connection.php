<?php
$con = new mysqli("127.0.0.1","root","1620","bloodbridge_db");

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
?>