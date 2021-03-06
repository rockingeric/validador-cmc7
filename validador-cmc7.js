;(function(context){


  var Cmc7Validator = {
    validate : function (typedValue){
      if(typedValue === undefined || typedValue === null){
        return false;
      }
      typedValue      = typedValue.replace(/\s/g, "");
      if(!typedValue){
        return false;
      }

      var pieces = {
        firstPiece  : typedValue.substr(0,7)
        , secondPiece : typedValue.substr(8,10)
        , thirdPiece  : typedValue.substr(19,10)
      };


      var digits = {
        firstDigit : parseInt(typedValue.substr(7,1))
        , secondDigit :  parseInt(typedValue.substr(18,1))
        , thirdDigit : parseInt(typedValue.substr(29,1))
      };

      var calculatedDigits = {
        firstDigit : this.module10(pieces.firstPiece)
        , secondDigit :  this.module10(pieces.secondPiece)
        , thirdDigit : this.module10(pieces.thirdPiece)
      };

      if ( (calculatedDigits.secondDigit != digits.firstDigit)
        || (calculatedDigits.firstDigit != digits.secondDigit)
        || (calculatedDigits.thirdDigit != digits.thirdDigit) ) {
          return false;
      }
      return true;
    }
    , module10 : function(str){
        if(str === undefined || str === null){
          return 0;
        }
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
        var dv = 10 - this.mod(result, 10);
        if (dv == 10) {
            dv = 0;
        }
        return dv;
    }
    , mod : function(dividend, divisor){
        return Math.round(dividend - (Math.floor(dividend/divisor)*divisor));
    }

  }

  // Expose the Cmc7Validator object
  context.Cmc7Validator = Cmc7Validator;
})(window);