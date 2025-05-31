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

const campoSenha = document.querySelector(`#campo-senha`);
const checkbox = document.querySelector(`.checkbox`);

for(i-0; i < checkbox.length;i++){
checkbox[i].onclick = geraSenha;
}


const letrasmaiusculas = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const letrasminusculas = `abcdefghijklmnopqrstuvwxyz`;
const numeros = `0123456789`;
const símbolos = `!@%*?`;

geraSenha();

function geraSenha() {
    let alfabeto = ``;
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasmaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasminusculas;
    } 
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }  
    if (checkbox[3].checked){
        alfabeto = alfabeto + símbolos;
    } 
    console.log(alfabeto);
let senha = ``;
    for (lit i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
 }



