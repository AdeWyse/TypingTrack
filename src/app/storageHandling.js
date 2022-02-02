
var dateStored = new Array;

var wmpStored = new Array;


var storage = window.localStorage;

export function importData() {
     var rawDateStored = storage.getItem('date');
     var rawWmpStored = storage.getItem('wmp');

     dateStored = JSON.parse(rawDateStored);
     wmpStored = JSON.parse(rawWmpStored);
     if(dateStored == null || wmpStored == null){
         dateStored = [];
         wmpStored = [];
     }
 }

 export  function exportData(wmp, date){
        importData();
     wmpStored.push(wmp);
     dateStored.push(date);
     storage.setItem('wmp', JSON.stringify(wmpStored));
    storage.setItem('date', JSON.stringify(dateStored));

 }