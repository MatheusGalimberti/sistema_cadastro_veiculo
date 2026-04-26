<?php

require_once "conexao.php";

$placa = $_POST["placa"];
$marca = $_POST["marca"];
$modelo = $_POST["modelo"];
$ano_fabricacao = $_POST["ano_fabricacao"];
$ano_modelo = $_POST["ano_modelo"];
$cor = $_POST["cor"];
$combustivel = $_POST["combustivel"];
$quilometragem = $_POST["quilometragem"];
$chassi = $_POST["chassi"];
$renavam = $_POST["renavam"];
$observacoes = $_POST["observacoes"];

$sql = "INSERT INTO veiculos 
        (placa, marca, modelo, ano_fabricacao, ano_modelo, cor, combustivel, quilometragem, chassi, renavam, observacoes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conexao->prepare($sql);

$stmt->bind_param(
    "sssiississs",
    $placa,
    $marca,
    $modelo,
    $ano_fabricacao,
    $ano_modelo,
    $cor,
    $combustivel,
    $quilometragem,
    $chassi,
    $renavam,
    $observacoes
);

if ($stmt->execute()) {
    echo "Veículo cadastrado com sucesso!";
} else {
    echo "Erro ao cadastrar veículo: " . $stmt->error;
}

$stmt->close();
$conexao->close();