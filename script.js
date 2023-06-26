let sliderElement = document.querySelector('#slider');
let buttunElement = document.querySelector('#button');
let sizePassword = document.querySelector('#valor');
let passWord = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');
let alerta = document.querySelector('.tooltip');

let charsert = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#"
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){

    let pass = "";
    for(let i = 0, n = charsert.length; i < sliderElement.value; ++i){
        pass += charsert.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    passWord.innerHTML = pass;
    novaSenha = pass;
    alerta.innerHTML = "Clique na senha para copiar. 👆";
}

function copyPassword(){
    alerta.innerHTML = "Senha copiada com sucesso! 👍";
    navigator.clipboard.writeText(novaSenha);
}