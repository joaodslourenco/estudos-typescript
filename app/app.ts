import { NegociacaoController } from "./src/controllers/NegociacaoController.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    controller.adiciona();
  });
} else {
  throw Error(
    "Não foi possível inicializar a aplicação. Verifique se o form existe.",
  );
}

const botaoImporta = document.querySelector("#botao-importa");
if (botaoImporta) {
  botaoImporta.addEventListener("click", () => {
    console.log("alow");
    controller.importaDados();
  });
} else {
  throw Error("Botão importa não foi encontrado.");
}
