<?php
    $servername = "localhost";
    $username = "lucas";
    $password = "lucas";
    $db_name = "banco_de_dados";

    $connect = mysqli_connect($servername, $username, $password, $db_name);

    if(mysqli_connect_error()){
        echo "falha na conexão: ".mysqli_connect_error();
    }
    
?>