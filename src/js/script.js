let sliderElement = document.querySelector('#slider');
let buttunElement = document.querySelector('#button');
let sizePassword = document.querySelector('#valor');
let passWord = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');
let alerta = document.querySelector('.tooltip');

const chkSimbolos = document.querySelector('.chk-simbolos');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const simbolos = ',.;~^[]{}!@#$%*()_+=-';

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

function ChecaQuantidade(maiusculas, minusculas, numeros, simbolos) {
    const alertError = document.querySelector('#error');
    
    if(maiusculas === false && minusculas === false && numeros === false && simbolos === false) {
        alertError.classList.remove('hide');
        containerPassword.classList.add("hide");
        return false;
    } else {
        alertError.classList.add('hide');
    }
}

function geraSenha(quantidade, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    quantidade = Number(quantidade);

    if(ChecaQuantidade(maiusculas, minusculas, numeros, simbolos) == false) return;

    for(let i = 0; i < quantidade; i++) {
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    let pass = senhaArray.join('').slice(0, quantidade);

    containerPassword.classList.remove("hide");
    passWord.innerHTML = pass;
    novaSenha = pass;
    alerta.innerHTML = "Clique na senha para copiar. 👆";
}

buttunElement.addEventListener('click', () => {
    geraSenha(
      sliderElement.value,
      chkMaiusculas.checked,
      chkMinusculas.checked,
      chkNumeros.checked,
      chkSimbolos.checked
    )
});

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function copyPassword(){
    alerta.innerHTML = "Senha copiada com sucesso! 👍";
    navigator.clipboard.writeText(novaSenha);
}