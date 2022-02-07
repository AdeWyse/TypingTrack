
var dateStored = new Array;

var wmpStored = new Array;

var typosStored = new Array;


var storage = window.localStorage;

export function importData() {
     var rawDateStored = storage.getItem('date');
     var rawWmpStored = storage.getItem('wmp');
     var rawTyposStored = storage.getItem('typo');

     dateStored = JSON.parse(rawDateStored);
     wmpStored = JSON.parse(rawWmpStored);
     typosStored = JSON.parse(rawTyposStored);
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
     storage.setItem('wmp', JSON.stringify(wmpStored));
    storage.setItem('date', JSON.stringify(dateStored));
    storage.setItem('typo', JSON.stringify(typosStored));
 }