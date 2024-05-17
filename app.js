let listaDeNumerosSorteados = []
const numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
console.log(numeroSecreto)
let tentativa = 1


function exibirMensagemInicial(tag, texto) {
    let mensagem = document.querySelector(tag)
    mensagem.innerHTML = texto
 
}
function mensagemTelaInicial() {
    exibirMensagemInicial('h1', 'Seja bem vindo ao jogo do numero secreto!')
    exibirMensagemInicial('p', 'Informe um numero de 0 a 10:')
}
mensagemTelaInicial()


function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto) {
        exibirMensagemInicial('h1', 'Parabens! Voce acertou o numero secreto!')
        let fraseTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
        exibirMensagemInicial('p', `Voce acertou o numero secreto em ${tentativa} ${fraseTentativa}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirMensagemInicial('h1', 'Errouu!')
            exibirMensagemInicial('p', 'O numero que voce informou é maior que o numero Secreto')


        } else {
            exibirMensagemInicial('h1', 'Errouu!')
            exibirMensagemInicial('p', 'O numero que voce informou é menor que o numero Secreto')

        }
        tentativa++
        limparCampo()
    }

}

function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }
        if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    
        }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
        }
}








function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    tentativa = 1
    mensagemTelaInicial()
    limparCampo()
    document.getElementById('reiniciar').setAttribute('disabled', true)

}