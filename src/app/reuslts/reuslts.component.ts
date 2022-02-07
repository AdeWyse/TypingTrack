import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {importData} from "../storageHandling";
import {Chart} from 'chart.js';
import {NgChartsModule} from 'ng2-charts';
// @ts-ignore
import {exportData, importData} from '../storageHandling';
@Component({
  selector: 'app-reuslts',
  templateUrl: './reuslts.component.html',
  styleUrls: ['./reuslts.component.css']
})
export class ReusltsComponent implements OnInit {

    rawWpm: number[] = new Array();
    rawDate: Date[] = new Array();
    rawTypos: number[] = new Array();

    average: number = 0;
    typos: string = '';
    wpm: string = '';
    date: string[] = new Array();
  constructor() { }

  ngOnInit(): void {
      this.getData();
      this.grahpicRender();
  }

  getData(){
      var rawData = importData();
      this.rawWpm = rawData[0];
      this.rawTypos = rawData[2];
      for(var i = 0; i<rawData[1].length; i++){
          var temp: string = rawData[1][i];
          this.rawDate.push(new Date(temp));
      }
      this.processData();
  }

  processData(){
      for( var i = 0; i < this.rawDate.length; i++){
          this.date.push(this.rawDate[i].toISOString().substr(5, 2)+ "/" +  this.rawDate[i].toISOString().substr(8, 2));
      }
      this.typos = this.rawTypos[this.rawWpm.length-1].toString();
      var soma = 0;
      for (var j = 0; j < this.rawTypos.length; j++){
            soma+= this.rawTypos[j];
      }
      this.average = soma / this.rawWpm.length;
      this.wpm = this.rawWpm[this.rawWpm.length-1].toString();
      this.typos = this.rawTypos[this.rawTypos.length-1].toString();
  }

  grahpicRender(){
      var ctx = document.getElementById("myChart");
      // @ts-ignore
      var myCHart =  new Chart(ctx, {type: 'bar',
          data: {
              labels: this.date,
              datasets: [{
                  label: 'Words per Minute',
                  data: this.rawWpm,
                  backgroundColor: [
                      'rgba(62, 76, 89, 1)'
                  ],
                  borderColor: [
                      'rgba(62, 62, 89, 1)'
                  ],
                  hoverBackgroundColor: [
                      'rgba(62, 76, 89, 1)'
                  ],
                  hoverBorderColor: [
                      'rgba(62, 76, 89, 1)'
                  ],
                  borderWidth: 1,

              }]
          },
          options: {
             responsive: true,
              maintainAspectRatio: false,
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
    }

}
