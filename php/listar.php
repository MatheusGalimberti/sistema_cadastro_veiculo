<?php

require_once "conexao.php";

$sql = "SELECT * FROM veiculos ORDER BY id DESC";

$resultado = $conexao->query($sql);

$veiculos = [];

if ($resultado->num_rows > 0) {
    while ($linha = $resultado->fetch_assoc()) {
        $veiculos[] = $linha;
    }
}

header('Content-Type: application/json');

echo json_encode($veiculos);

$conexao->close();