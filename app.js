//Variáveis globais
let listaDeAmigos = [ ];
let numeroDeAmigos = 0;
let amigoSorteado = ""; 
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

//Função para exibir a lista dos nomes dos amigos.
function exibirNomesNaTela() {
    listaAmigos.innerHTML = "";
    let conteudo = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        conteudo += "<li><strong>" + listaDeAmigos[i] + "</strong></li>";
    }
    
    listaAmigos.innerHTML = conteudo;
}
 
//Função para sortear o amigo secreto
function sortearAmigo() {
    amigoSorteado = parseInt(Math.random() * numeroDeAmigos + 1);
    listaAmigos.innerHTML = "";
    
    resultadoDoSorteio();
}

//Função para mostrar o resultado do sorteio.
function resultadoDoSorteio() {
    resultado.innerHTML = "<li>O amigo secreto sorteado é: " + listaDeAmigos[amigoSorteado -1] + "<li>"
}


//Função para adicionar o amigos na lista.
function adicionarAmigo () {

    if (listaDeAmigos.length > 0 && amigoSorteado != "") {
        reiniciarJogo();
    }

    let nomeDoAmigo = document.querySelector('input').value;
    
    if (nomeDoAmigo == "") {
        alert("Por favor insira um nome válido"); 
    } else {
        listaDeAmigos.push(nomeDoAmigo);
        numeroDeAmigos++;
        limparCampo();
    }

    exibirNomesNaTela();
}

//Função para limpar o campo de input.
function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = "";
}

//Função para reiniciar o jogo.
function reiniciarJogo() {   
    numeroDeAmigos = 0;
    amigoSorteado = "";
    listaDeAmigos = [];
    resultado.innerHTML = "";
}