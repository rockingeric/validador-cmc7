function mod(dividend, divisor){
    return Math.round(dividend - (Math.floor(dividend/divisor)*divisor));
}

function replace_all(string, token, newtoken) {
    while (string.indexOf(token) != -1) {
        string = string.replace(token, newtoken);
    }
    return string;
}

// validador de cmc7
function check_cmc7(typedValue){
    typedValue      = replace_all(typedValue, " ", "");
    var typedValue1 = typedValue.substr(0,7);
    var typedValue2 = typedValue.substr(8,10);
    var typedValue3 = typedValue.substr(19,10);

    var dv1 = typedValue.substr(7,1);
    var dv2 = typedValue.substr(18,1);
    var dv3 = typedValue.substr(29,1);

    var isValid = true;

    if(typedValue.trim()){
        if (modulo10(typedValue1) != dv2) {
            isValid = false;
        } else if (modulo10(typedValue2) != dv1){
            isValid = false;
        } else if (modulo10(typedValue3) != dv3){
            isValid = false;
        }
    } else {
        isValid = false;
    }
    return isValid;
}



function modulo10(str){
    var size = str.length - 1;
    var result = 0;
    var weight = 2;

    for (var i = size; i >= 0; i--) {
        total = str.substr(i, 1) * weight;
        if (total > 9) {
            result = result + 1 + (total - 10);
        } else {
            result = result + total;
        }
        if (weight == 1) {
            weight = 2;
        } else {
            weight = 1;
        }
    }
    var dv = 10 - mod(result, 10);
    if (dv == 10) {
        dv = 0;
    }
    return dv;
}