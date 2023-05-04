<?php

// Define as variáveis de conexão com o banco de dados
$servername = "containers-us-west-177.railway.app";
$username = "root";
$password = "eFDcqezLFS01OKxGsmvz";
$dbname = "railway";

// Cria a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se houve erros na conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

?>
