const tabelaVeiculos = document.getElementById("tabelaVeiculos");

fetch("php/listar.php")
    .then(response => response.json())
    .then(veiculos => {
        console.log("Veículos recebidos:", veiculos);
        console.log("Quantidade:", veiculos.length);

        tabelaVeiculos.innerHTML = "";

        veiculos.forEach(veiculo => {
            const linha = document.createElement("tr");

            linha.innerHTML = `
                <td>${veiculo.id}</td>
                <td>${veiculo.placa}</td>
                <td>${veiculo.marca}</td>
                <td>${veiculo.modelo}</td>
                <td>${veiculo.ano_fabricacao}</td>
                <td>${veiculo.ano_modelo}</td>
                <td>${veiculo.cor}</td>
                <td>${veiculo.combustivel}</td>
                <td>${veiculo.quilometragem}</td>
                <td>${veiculo.chassi}</td>
                <td>${veiculo.renavam}</td>
                <td>${veiculo.data_cadastro}</td>
                <td>${veiculo.observacoes}</td>
            `;

            tabelaVeiculos.appendChild(linha);
        });
    })
    .catch(error => {
        console.error("Erro ao listar veículos:", error);
        tabelaVeiculos.innerHTML = `
            <tr>
                <td colspan="13">Erro ao carregar veículos cadastrados.</td>
            </tr>
        `;
    });