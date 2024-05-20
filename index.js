let listaDeNumerosSorteados = []
const numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1


function exibirMensagemInicial(tag, texto) {
    let menssagem = document.querySelector(tag)
    menssagem.innerHTML = texto
}

function mensagensIniciais() {
    exibirMensagemInicial('h1', 'Bem Vindo ao jogo do numero secreto!')
    exibirMensagemInicial('p', 'Informe um numero de 0 a 50:')
}
mensagensIniciais()

function verificarChute() {
    let chute = document.querySelector('input').value


    if (chute == numeroSecreto) {
        exibirMensagemInicial('h1', 'Parabens!!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagenTentativas = `Voce acertou o numero secreto em ${tentativas} ${palavraTentativa}`
        exibirMensagemInicial('p', mensagenTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if(chute > numeroSecreto){
            exibirMensagemInicial('p', 'O numero que voce informou é maior que o numero secreto')
            limparCampo()
        }else{
            exibirMensagemInicial('p', 'O numero que voce informou é menor que o numero secreto')
            limparCampo()
        }
   
    tentativas++
    
    }

}



function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    console.log(numeroEscolhido)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }


}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    mensagensIniciais();
    tentativas = 1
    limparCampo()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}