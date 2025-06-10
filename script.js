
function aumentarfont(){
    var elemento = document.querySelector("body");
    var tamanhoAtual = window.getComputedStyle(elemento).fontSize;
    var novoTamanho = parseFloat(tamanhoAtual) + 2 + "px";
    elemento.style.fontSize = novoTamanho;
}

function diminuirfont(){
    var elemento = document.querySelector("body");
    var tamanhoAtual = window.getComputedStyle(elemento).fontSize;
    var novoTamanho = parseFloat(tamanhoAtual) - 2 + "px";
    elemento.style.fontSize = novoTamanho;
}

function toggleSenha() {
    var senhaInput = document.getElementById("senhaTexto");
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
}

document.getElementById("toggleSenha").addEventListener("click", function() {
    var senhaInput = document.getElementById("senha");
    senhaInput.type = senhaInput.type === "password" ? "text" : "password";
})

function toggleDropdown() {
  var dropdown = document.getElementById("dropdown");
  dropdown.style.display = (dropdown.style.display === "none") ? "block" : "none";
}

function alternarContraste() {
    document.body.classList.toggle("alto-contraste");
}