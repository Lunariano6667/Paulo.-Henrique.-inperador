const numerosenha = document.querySelector(`.parametro-senha__texto`);
let tamanhoSenha = 12;
numerosenha.textContent = tamanhoSenha;
const letrasmaiusculas = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const letrasminusculas = `abcdefghijklmnopqrstuvwxyz`;
const numeros = `0123456789`;
const símbolos = `!@%*?`;
const botoes = document.querySelectorAll(`.parametro-senha__botao`);
const campoSenha = document.querySelector(`#campo-senha`);
const checkbox = document.querySelector(`.checkbox`);
const forcaSenha = document.querySelector(`.forca`);

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

for(i-0; i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}

geraSenha();

function geraSenha() {
    let alfabeto = ``;
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasmaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasminusculas;
    } 
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }  
    if (checkbox[3].checked) {
        alfabeto = alfabeto + símbolos;
    } 
let senha = ``;
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha ();

 }

function classificaSenha (tamanhoAlfabeto){
    let entropia = tamanhosenha * Math.log2(tamanhoAlfabeto);
    forcaSenha.classList.remove(`fraca`,`media`,`forte`);
    if (entropia > 57){
        forcaSenha.classList.add(`forte`);
    }else if(entropia > 35 && entropia < 57 ) {
        forcaSenha.classList.add(`media`);
    }else if (entropia <= 35){
        forcaSenha.classList.add(`fraca`);
    }
const valorEntropia = documnt.querySelector(`.entropia`);
    valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/
(100e6*60*60*24)) + " dias para descobrir essa senha.";
}











    
}





