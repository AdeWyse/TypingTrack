//import * as CryptoJS from 'crypto-js';
//File responsible for importing, exporting, encrypting and decrypting data from the local storage on the browser.
var dateStored = new Array;

var wmpStored = new Array;

var typosStored = new Array;


var storage = window.localStorage;

var CryptoJS = require("crypto-js");

export function importData() {
    //Gets encrypted data from the local storage
    var rawEncryptedWpm = storage.getItem('wmp');
    var rawEncryptedDate = storage.getItem('date');
    var rawEncryptedTypos = storage.getItem('typo');

    var rawWmpStored;
    var rawDateStored;
    var rawTyposStored;
    //Tests to see if the data exists, if exists decrypts it, else sets it to null. This is necessary so there is no conflict later when creating the array with the data or exporting new data.
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
    //Gets the data already on the local storage to populate array
    importData();
    //Ads the last result to the array with the older results, encrypts it and stores all the data on the local storage.
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
    //Clears the storage
     //ALL DATA IS DELETED, FOREVER
    storage.clear();
 }
