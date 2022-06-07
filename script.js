function CalcularImc(){
    let nome = document.getElementById("Nome");
    let peso = parseFloat (document.getElementById("Peso"));
    let altura = parseFloat (document.getElementById("Altura"));
    let imc = 0;
    let resultado;

    console.log(nome);
    console.log(peso);
    console.log(altura);
    
    imc = peso / (altura * altura);
    console.log(imc);

    if (imc < 18.5){
        resultado = "(Abaixo do peso)"
    }
    else if (imc >= 18.5 && imc < 25){
        resultado = "(Peso normal)"
    }
    else if (imc >= 25 && imc < 30){
        resultado = "(Sobrepeso)"
    }
    else if (imc >= 30 && imc < 35){
        resultado = "(Obesidade grau 1)"
    }
    else if (imc >= 35 && imc < 40){
        resultado = "(Obesidade grau 2)"
    }
    else{
        resultado = "(Obesidade grau 3)"
    }
    alert(nome + " " + "se encaixa em" + " " + resultado);
}