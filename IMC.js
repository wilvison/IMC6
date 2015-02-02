/*metodo: calcularIMC*/
function calcularIMC() {
    var formulario = document.getElementById("formulario");

    var kilos = +formulario.kilos.value;
    var metros = +formulario.metros.value;
    var centimetros = +formulario.centimetros.value;

    var altura = (metros * 100 + centimetros) /100;
    var imc = kilos / (altura * altura);

    formulario.imc.value  = imc.toFixed(2);

    if(imc < 20) {
        formulario.situacao.value  = "Abaixo do Peso";
    } else if (imc >= 20 && imc < 25) {
        formulario.situacao.value  = "Peso Ideal";
    } else if (imc > 25 && imc <= 30 ) {
        formulario.situacao.value  = "Acima do Peso";
    } else if (imc > 30 && imc <= 35 ) {
        formulario.situacao.value  = "Obesidade Moderada";
    } else if (imc > 35 && imc <= 40 ) {
        formulario.situacao.value  = "Obesidade Severa";
    } else if (imc > 40 && imc <= 50 ) {
        formulario.situacao.value  = "Obesidade Mórbida";
    } else {
        formulario.situacao.value  = "Super Obesidade";
    }

}