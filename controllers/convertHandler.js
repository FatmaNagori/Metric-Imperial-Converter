/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.getFirstLetter=function(input){
    var regex=/[a-zA-Z]/;
    var result=input.indexOf(input.match(regex));
    return result;
  }
  this.getNum = function(input) {
    var result;
    var FirstLetter=this.getFirstLetter(input);
    var res=input.slice(0,FirstLetter);
    var invalidNum=res.indexOf('/', res.indexOf('/')+1)
    if (FirstLetter==0){result=1}
    else if(invalidNum!==-1){result='invalid number'}
    else{result=res}
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var option = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var FirstLetter=this.getFirstLetter(input);
    var unit=input.slice(FirstLetter);
    var correctUnit=option.includes(unit);
    if(correctUnit){result=unit}
    else{result='invalid unit'}
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var Unit=initUnit.toLowerCase()
    var result={
      "gal":"l",
      "l":"gal",
      "mi":"km",
      "km":"mi",
      "lbs":"kg",
      "kg":"lbs"
    }
    
    return result[Unit];
  };

  this.spellOutUnit = function(unit) {
    var Unit=unit.toLowerCase();
    var result={
     "gal":"gallon",
      "l":"liter",
      "mi":"mile",
      "km":"kilometer",
      "kg":"kilogram",
      "lbs":"pound"
    }
    
    return result[Unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var Unit=initUnit.toLowerCase();
    var formula={
      "gal":galToL,
      "l":1/galToL,
      "lbs":lbsToKg,
      'kg':1/lbsToKg,
      "mi":miToKm,
      "km":1/miToKm
    }
    var result=Math.round(initNum*formula[Unit]*100000)/100000;
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var spellInitUnit;
    var spellReturnUnit;
    if (initNum<=1){
     spellInitUnit=this.spellOutUnit(initUnit);
    }else{spellInitUnit=this.spellOutUnit(initUnit)+'s';}
    if(returnNum<=1){
      spellReturnUnit=this.spellOutUnit(returnUnit);
    }else{
     spellReturnUnit=this.spellOutUnit(returnUnit)+'s';
    }
    var result=`${initNum} ${spellInitUnit} converts to ${returnNum} ${spellReturnUnit}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
