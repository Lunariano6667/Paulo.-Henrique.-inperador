const numerosenha = document.querySelector(`.parametro-senha__texto`);
let tamanhoSenha = 5;
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
geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
     // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numerosenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector(`#campo-senha`)

const letrasminusculas = `ABCDEFGHIJKLMNOPQRSTUVXYWZ`;
geraSenha();

function geraSenha() {
let senha = ``;
    for (lit i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasminusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
 }



