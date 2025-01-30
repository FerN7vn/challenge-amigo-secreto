//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [ ];
let numeroDeAmigos = 0;

function exibirNomesNaTela(tag, texto) {
    
}

function adicionarAmigo () {
    let nomeDoAmigo = document.querySelector('input').value;
    
    if (nomeDoAmigo == "") {
        alert("Por favor insira um nome válido"); 
    } else {
        listaDeAmigos.push(nomeDoAmigo);
        numeroDeAmigos++;
    }
}
    
