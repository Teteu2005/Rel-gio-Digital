const Calcular = document.getElementById('Calcular');

function imc(){
    const nome = document.getElementById('nome').value ;
    const altura = document.getElementById('altura').value ;
    const peso = document.getElementById('peso').value ;
    const resultado = document.getElementById('resultado');

    if(nome !=='' && altura !=='' && peso !==''){
  
        const valorIMC = (peso / (altura * altura)).toFixed(2);
       
       let classificacao = '';

       if(valorIMC < 18.5){
        classificacao =' abaixo do peso.';
       } else if(valorIMC < 25){
        classificacao = 'com peso ideal. Parabéns!!';
       } else if( valorIMC < 30){
        classificacao = 'levemente acima do peso.';
       } else if (valorIMC < 35){
        classificacao = 'com obsidade grau I. Atenção!';
       } else if(valorIMC < 40){
        classificacao ='obesidade grau II. Cuidado!';
       } else{
        classificacao ='obesidade grau III. Muito cuidado!!'
        
       }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else{
     resultado.textContent ='É nescessário preencher todos os campos!'
    }

}

Calcular.addEventListener('click', imc)


