/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var result;
      res.body={};
      if(initNum=="invalid number" && initUnit=='invalid unit'){result={string:"invalid number and unit"}}
      else if(initNum=="invalid number"){result={string:"invalid number"}}
      else if(initUnit=='invalid unit'){result={string:"invalid unit"}}
      else{
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
       
      res.body.initNum=initNum;
      res.body.initUnit=initUnit;
      res.body.returnNum=returnNum
      res.body.returnUnit=returnUnit
      res.body.toString=convertHandler.getString(res.body.initNum, res.body.initUnit, res.body.returnNum, res.body.returnUnit);
      result={
       initNum:res.body.initNum,
       initUnit:res.body.initUnit,
       returnNum:res.body.returnNum,
       returnUnit:res.body.returnUnit,
       string:res.body.toString 
      }
      }
      res.status(200).json(result)
    });
    
};
