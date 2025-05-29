const numerosenha = document.querySelector(`.parametro-senha__texto`);
let tamanhoSenha = 12;
numerosenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll(`.parametro-senha__botao`);

botoes[0].onclick = diminuitamanho;
botoes[1].onclick = aumentaTamanho
function diminuitamanho(){
tamanhoSenha = tamanhoSenha-1;
numerosenha.textContent = tamanhoSenha;

}
function aumentaTamanho(){
    tamanhoSenha = tamanhoSenha+1;
    numerosenha.textContent = tamanhoSenha;
}

console.log(botoes);
