//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [ ];
let numeroDeAmigos = 0;
let amigoSorteado; 
/* let listaAmigos = document.getElementById('listaAmigos');
let amigo = document.createElement('li');
let strongTag = document.createElement('strong'); */

/* function exibirNomesNaTela() {
    for (let i = 0; i < listaDeAmigos.length; i++) {
        strongTag.textContent = listaDeAmigos[i];
        amigo.appendChild(strongTag);
        listaAmigos.appendChild(amigo);
    }
}  */

function exibirNomesNaTela() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    let conteudo = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        conteudo += "<li><strong>" + listaDeAmigos[i] + "</strong></li>";
    }

    listaAmigos.innerHTML = conteudo;
}
 
function sortearAmigo() {
    amigoSorteado = parseInt(Math.random() * numeroDeAmigos + 1);
    console.log(listaDeAmigos[amigoSorteado -1]);
    listaAmigos.innerHTML = "";
    
    resultadoDoSorteio();
    /* reiniciarJogo(); */
}

function resultadoDoSorteio() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "<li>O amigo secreto é: " + listaDeAmigos[amigoSorteado -1] + "<li>"
}

function adicionarAmigo () {
    let nomeDoAmigo = document.querySelector('input').value;
    
    if (nomeDoAmigo == "") {
        alert("Por favor insira um nome válido"); 
    } else {
        listaDeAmigos.push(nomeDoAmigo);
        numeroDeAmigos++;
        //console.log(listaDeAmigos);
        console.log(numeroDeAmigos);
        console.log(listaDeAmigos[numeroDeAmigos - 1]);
        limparCampo();
    }
    
    exibirNomesNaTela();
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = "";
}

function reiniciarJogo() {
    if (listaDeAmigos.length > 0) {
    amigoSorteado = ""; 
    listaDeAmigos = [];
    resultado.innerHTML = "";
    }
} 
    
