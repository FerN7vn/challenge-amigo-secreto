//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [ ];
let numeroDeAmigos = 0;

/* function exibirNomesNaTela(tag, texto) {
    let nomes = document.querySelector(tag);
    let lista = document.querySelector('ul');
    nomes.lista.appendChild = texto;
}
 */

function sortearAmigo() {
    sorteio = parseInt(Math.random() * numeroDeAmigos + 1);
    console.log(listaDeAmigos[sorteio -1]);
}

function adicionarAmigo () {
    let nomeDoAmigo = document.querySelector('input').value;
    
    if (nomeDoAmigo == "") {
        alert("Por favor insira um nome válido"); 
    } else {
        listaDeAmigos.push(nomeDoAmigo);
        numeroDeAmigos++;
        //console.log(listaDeAmigos);
        //console.log(numeroDeAmigos);
        console.log(listaDeAmigos[numeroDeAmigos - 1]);
        limparCampo();
    }
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = "";
}
    
