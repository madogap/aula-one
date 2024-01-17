let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do número secreto";
let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10";


let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número de 1 a 10");  
};
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número é maior");
    }
    tentativas++;
    limparCampo();
  }
  console.log(chute == numeroSecreto);
};

//Gerar números aleatórios sem parametros com retorno
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  };

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  };
};

function limparCampo() {
  chute = document.querySelector('input');
  chute.value= '';
};

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
};



/*
Tipo de Função|	Exemplo de Código	| Uso
Sem retorno e sem parâmetro	| function saudacao() { ... } |	Execução de bloco de código simples.
Sem retorno e com parâmetro	| function cumprimentar(nome) { ... } |	Execução de bloco de código com argumentos.
Com retorno e sem parâmetro	| function gerarNumeroAleatorio() { ... }	| Cálculo e retorno de um valor específico.
Com retorno e com parâmetro	| function somar(a, b) { ... }	| Cálculo e retorno baseado em argumentos.
Função anônima	| let saudacao = function() { ... };	| Definição de função sem nome localmente.
Arrow function	| let quadrado = x => x * x;	| Definição concisa de funções curtas.


*/
