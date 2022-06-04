<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sobre</title>
        <link rel="shortcut icon" href="https://cdn.greatsoftwares.com.br/arquivos/paginas/10580-bd3c93a058ad9fa212b23fd6d88e7df4.png">
        <!--CSS-->
        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href="./css/sessoes.css">
        <link rel="stylesheet" href="./css/buttons.css">
        <link rel="stylesheet" href="./css/bk_and_colors.css">
        <link rel="stylesheet" href="./css/lines.css">
        <link rel="stylesheet" href="./css/whats_style.css">
        <?php
            $url = $_SERVER["REQUEST_URI"];
            if (preg_match("/login/", $url)){
                echo "<link rel='stylesheet' href='./css/login_style.css'>";
            }
        ?>
    </head>