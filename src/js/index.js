//pegar o elemento 'botao' do html guardando na variavel
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById("btn-voltar");
//deixar o cartao selecionado aparecendo
const cartoes = document.querySelectorAll('.cartas');
let cartaoAtual = 0;
//selecionar a carta que esta aparecendo

//a funcao que acontece quando aperta no botao
btnAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) return;//return = nao continua o codigo
    //tira a classe selecionada do cartao pra esconder o cartao
    const cartaoSelecionado = document.querySelector('.selecionada');
    cartaoSelecionado.classList.remove("selecionada");
    //fazer aparecer o proximo cartao da lista
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionada');
});

btnVoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) return;//return = nao continua o codigo
    const cartaoSelecionado = document.querySelector('.selecionada');
    cartaoSelecionado.classList.remove("selecionada");
    //fazer aparecer cartao anteriopr da lista
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add('selecionada');
});

