//import * as CryptoJS from 'crypto-js';
var dateStored = new Array;

var wmpStored = new Array;

var typosStored = new Array;


var storage = window.localStorage;

var CryptoJS = require("crypto-js");

export function importData() {
    var rawEncryptedWpm = storage.getItem('wmp');
     var rawEncryptedDate = storage.getItem('date');
    var rawEncryptedTypos = storage.getItem('typo');

    var rawWmpStored;
    var rawDateStored;
    var rawTyposStored;

     if(rawEncryptedWpm != null){
         rawWmpStored =  CryptoJS.AES.decrypt(rawEncryptedWpm, 'pow');
         wmpStored = JSON.parse(rawWmpStored.toString(CryptoJS.enc.Utf8));
         rawDateStored =  CryptoJS.AES.decrypt(rawEncryptedDate, 'pow');
         dateStored = JSON.parse(rawDateStored.toString(CryptoJS.enc.Utf8));
         rawTyposStored =  CryptoJS.AES.decrypt(rawEncryptedTypos, 'pow');
         typosStored = JSON.parse(rawTyposStored.toString(CryptoJS.enc.Utf8));
     }else{
         rawWmpStored = null;
         wmpStored = null;
         rawTyposStored = null;
     }
     if(dateStored == null || wmpStored == null || typosStored == null){
         dateStored = [];
         wmpStored = [];
         typosStored = [];
     }
     var stored = [wmpStored, dateStored, typosStored];
     return stored;
 }

 export function exportData(wmp, date, typos){
    importData();
     wmpStored.push(wmp);
     dateStored.push(date);
     typosStored.push(typos);
     var encryptedWpm = CryptoJS.AES.encrypt(JSON.stringify(wmpStored), 'pow').toString();
     var encryptedDate = CryptoJS.AES.encrypt(JSON.stringify(dateStored), 'pow').toString();
     var encryptedTypos = CryptoJS.AES.encrypt(JSON.stringify(typosStored), 'pow').toString();
     storage.setItem('wmp', encryptedWpm);
    storage.setItem('date', encryptedDate);
    storage.setItem('typo', encryptedTypos);
 }

 export function deleteData(){
    storage.clear();
 }