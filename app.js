//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [ ];
let numeroDeAmigos = 0;
let amigoSorteado; 

/* function exibirNomesNaTela() {
    let listaAmigos = document.getElementById('listaAmigos');
    const amigo = document.createElement('li');

    for (let i = 0; i < listaDeAmigos.length; i++) {
        listaAmigos.textContent = listaAmigos[i];
    }
} */
 
function sortearAmigo() {
    amigoSorteado = parseInt(Math.random() * numeroDeAmigos + 1);
    console.log(listaDeAmigos[amigoSorteado -1]);
    
    resultadoDoSorteio();
}

function resultadoDoSorteio() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "<li>O amigo secreto é: " + amigoSorteado + "<li>"
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
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = "";
}
    
