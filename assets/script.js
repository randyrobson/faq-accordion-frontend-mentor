let botoes = document.querySelectorAll("button");
let i;

for (i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function() {
    let paragrafo = this.nextElementSibling;
    let ativar = this.classList.contains("abrir");
    let desativado = document.querySelector("button.abrir");

    this.classList.toggle("abrir", !ativar);
    paragrafo.style.maxHeight = ativar ? null : paragrafo.scrollHeight + "px";

    if (desativado && desativado !== this) {
      desativado.classList.remove("abrir");
      desativado.nextElementSibling.style.maxHeight = null;
    }
  });
}
