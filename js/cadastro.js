const formVeiculo = document.getElementById("formVeiculo");

formVeiculo.addEventListener("submit", function (event) {
    event.preventDefault();

    const dadosFormulario = new FormData(formVeiculo);

    fetch("php/cadastrar.php", {
        method: "POST",
        body: dadosFormulario
    })
    .then(response => response.text())
    .then(mensagem => {
        alert(mensagem);
        formVeiculo.reset();
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao cadastrar veículo.");
    });
});