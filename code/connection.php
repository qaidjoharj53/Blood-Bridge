<?php

function newConnection()
{
    $host = "localhost";
    $user = "root";
    $pass = "1620";
    $db   = "bloodbridge_db";

    if (isDocker()) {
        $host = "mysql";
    }

    $conn = new mysqli($host, $user, $pass, $db);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}

function isDocker()
{
    return is_file("/.dockerenv");
}

?>