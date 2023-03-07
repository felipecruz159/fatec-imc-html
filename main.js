const alturaInput = document.querySelector('#altura');
const pesoInput   = document.querySelector("#peso");
const calcular    = document.querySelector('#calcular');
const msgPlace    = document.querySelector('#result');

var mensagem = '';
calcular.addEventListener("click", function(){
    //get altura
    let altura = alturaInput.value; //type string
    altura = parseFloat(altura.replace(",", "."));

    //transforma altura (se colocado em cm para m)
    if(altura > 3){
        altura = altura / 100;
    }

    //get peso
    let peso = pesoInput.value; //type string
    peso = parseFloat(peso.replace(",", "."));

    let imc = peso / Math.pow(altura, 2);

    verificaTabela(imc);
})

function verificaTabela(imc){
    if (imc < 18.5){
        mensagem = 'Magreza';
    }
    else if (imc < 24.9){
        mensagem = 'Normal';
    }
    else if (imc < 29.9){
        mensagem = 'Sobrepeso';
    }
    else if (imc < 34.9){
        mensagem = 'Obesidade grau I';
    }
    else if (imc < 39.9){
        mensagem = 'Obesidade grau II';
    }
    else{
        mensagem = 'Obesidade grau III';
    }

    msgPlace.innerHTML = '<h3>' + mensagem + '</h3>';
    msgPlace.style.visibility = 'visible'
}
