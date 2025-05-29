const numerosenha = document.querySelector(`.parametro-senha__texto`);
let tamanhoSenha = 12;
numerosenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll(`.parametro-senha__botao`);

botoes[0].onclick = diminuitamanho;
botoes[1].onclick = aumentaTamanho

function diminuitamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
tamanhoSenha--;
    }
numerosenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
     // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numerosenha.textContent = tamanhoSenha;
}

console.log(botoes);
