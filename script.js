let bancoDeDados = "http://localhost:5678/webhook/controle-componentes";

document.addEventListener("DOMContentLoaded", () => {
  const botaoEnviar = document.getElementById("submit-button");
  const botaoCancelar = document.getElementById("clear-form");

  if (botaoEnviar) {
    botaoEnviar.addEventListener("click", function (event) {
      event.preventDefault(); // Impede o envio do formulário

      // Pega os valores dos campos no momento do clique
      const nomeComponente = document.getElementById("componente").value;
      const snComponente = document.getElementById("sn__componente").value;
      const snRemovido = document.getElementById("sn__removido").value;
      const snInstalado = document.getElementById("sn__instalado").value;
      const observacao = document.getElementById("observacao").value;
      const data = document.getElementById("component-date").value;

      // Verifica se todos os campos estão preenchidos
      if (
        !nomeComponente ||
        !snComponente ||
        !snRemovido ||
        !snInstalado ||
        !observacao ||
        !data
      ) {
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
        data: data,
      };

      fetch(bancoDeDados, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(componente),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao adicionar componente");
          }
          return response.json();
        })
        //.then(data => {
        //    console.log("Componente adicionado:", data);
        //    alert("Componente adicionado com sucesso!");
        //})
        .catch((error) => {
          console.error("Erro:", error);
          alert("Erro ao adicionar componente.");
        });

      console.log("dados do componente:", componente);

      //alert("Componente adicionado com sucesso!");
      Toastify({
        text: "Componente adicionado com sucesso!",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();

      // Limpa os campos do formulário
      document.getElementById("componente").value = "";
      document.getElementById("sn__componente").value = "";
      document.getElementById("sn__removido").value = "";
      document.getElementById("sn__instalado").value = "";
      document.getElementById("observacao").value = "";
      document.getElementById("component-date").value = "";
    });
  }

  if (botaoCancelar) {
    botaoCancelar.addEventListener("click", function () {
      // Limpa os campos do formulário
      document.getElementById("componente").value = "";
      document.getElementById("sn__componente").value = "";
      document.getElementById("sn__removido").value = "";
      document.getElementById("sn__instalado").value = "";
      document.getElementById("observacao").value = "";
      document.getElementById("component-date").value = "";
    });
  }
});

//if (botaoCancelar) {
//   botaoCancelar.addEventListener("click", function() {
//Limpa os campos do formulário usando o método reset
//    form.reset();
//});
