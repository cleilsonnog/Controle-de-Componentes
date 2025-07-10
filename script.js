document.addEventListener('DOMContentLoaded', () => {
    const botaoEnviar = document.getElementById("submit-button");
    const botaoCancelar = document.getElementById("clear-form");

    if (botaoEnviar) {
        botaoEnviar.addEventListener("click", function(event) {
            event.preventDefault(); // Impede o envio do formulário

            // Pega os valores dos campos no momento do clique
            const nomeComponente = document.getElementById("componente").value;
            const snComponente = document.getElementById("sn__componente").value;
            const snRemovido = document.getElementById("sn__removido").value;
            const snInstalado = document.getElementById("sn__instalado").value;
            const observacao = document.getElementById("observacao").value;
            const data = document.getElementById("component-date").value;

            // Verifica se todos os campos estão preenchidos
            if (!nomeComponente || !snComponente || !snRemovido || !snInstalado || !observacao || !data) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            // Cria um objeto com os dados do componente
            const componente = {
                nome: nomeComponente,
                snComponente: snComponente,
                snRemovido: snRemovido,
                snInstalado: snInstalado,
                observacao: observacao,
                data: data
            };
            
            //componente = JSON.stringify(componente);

            console.log("dados do componente:", componente);
            alert("Componente adicionado com sucesso!");
            // Limpa os campos do formulário
            document.getElementById("componente").value = '';
            document.getElementById("sn__componente").value = '';
            document.getElementById("sn__removido").value = '';
            document.getElementById("sn__instalado").value = '';
            document.getElementById("observacao").value = '';
            document.getElementById("component-date").value = '';
        });
    }

    if (botaoCancelar) {
        botaoCancelar.addEventListener("click", function() {
            // Limpa os campos do formulário
            document.getElementById("componente").value = '';
            document.getElementById("sn__componente").value = '';
            document.getElementById("sn__removido").value = '';
            document.getElementById("sn__instalado").value = '';
            document.getElementById("observacao").value = '';
            document.getElementById("component-date").value = '';
        });
    }
});


//if (botaoCancelar) {
//   botaoCancelar.addEventListener("click", function() {
//Limpa os campos do formulário usando o método reset
//    form.reset();
//});