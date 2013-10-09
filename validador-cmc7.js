function mod(dividendo, divisor)
{
    return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

function replaceAll(string, token, newtoken) {
    while (string.indexOf(token) != -1) {
        string = string.replace(token, newtoken);
    }
    return string;
}

// validador de cmc7
function valida_cmc7(campo){
    campo      = replaceAll(campo, " ", "");
    var campo1 = campo.substr(0,7);
    var campo2 = campo.substr(8,10);
    var campo3 = campo.substr(19,10);

    var dv1 = campo.substr(7,1);
    var dv2 = campo.substr(18,1);
    var dv3 = campo.substr(29,1);

    var is_valid = true;

    if(campo.trim()){
        if (modulo10(campo1) != dv2) {
            is_valid = false;
        } else if (modulo10(campo2) != dv1){
            is_valid = false;
        } else if (modulo10(campo3) != dv3){
            is_valid = false;
        }
    } else {
        is_valid = false;
    }
    return is_valid;
}



function modulo10(str){
    var tamanho = str.length - 1;
    var soma = 0;
    var peso = 2;

    for (var i = tamanho; i >= 0; i--) {
        total = str.substr(i, 1) * peso;
        if (total > 9) {
            soma = soma + 1 + (total - 10);
        } else {
            soma = soma + total;
        }
        if (peso == 1) {
            peso = 2;
        } else {
            peso = 1;
        }
    }
    var dv = 10 - mod(soma, 10);
    if (dv == 10) {
        dv = 0;
    }
    return dv;
}