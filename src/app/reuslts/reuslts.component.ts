import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {deleteData, importData} from "../storageHandling";
import {Chart} from 'chart.js';
import {NgChartsModule} from 'ng2-charts';
// @ts-ignore
import {exportData, importData} from '../storageHandling';
import {clearCanvas} from "chart.js/helpers";
import {Router} from "@angular/router";
@Component({
  selector: 'app-reuslts',
  templateUrl: './reuslts.component.html',
  styleUrls: ['./reuslts.component.css']
})
export class ReusltsComponent implements OnInit {

    rawWpm: number[] = new Array();
    rawDate: Date[] = new Array();
    rawTypos: number[] = new Array();

    count: number = 0;

    processedWpm: number[] = new Array();
    processedDate: Date[] = new Array();

    average: number = 0;
    typos: string = '';
    wpm: number = 0;
    date: string[] = new Array();
  constructor(private router: Router) {
      this.refresh();
  }

  ngOnInit(): void {
     this.initialization();
  }
  //Refreshes the variables.
  refresh(){

      this.getData();
  }
  initialization(){
      var storage = window.localStorage;
      if(storage.getItem('date')!= null){
          this.getData();
      }else{
          this.typos = '0';
          this.wpm = 0;
      }
      this.grahpicRender();
  }
  //Gets the results from storageHandling.
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
    //Calculate the average wpm.
  calcAverage(data: number[]){
      var soma = 0;
      for (var j = 0; j < data.length; j++){
          soma+= data[j];
      }
      return  soma / data.length;
  }
//Sets the variables responsible for what appears on the screen.
  processData(){

      this.typos = this.rawTypos[this.rawWpm.length-1].toString();

      this.average = this.calcAverage(this.rawWpm);

      //Cuts the rawWpm array to fit better on the chart, taking only the 10th most recent results.
      this.processedWpm = new Array;
      this.date = new Array;
      if(this.rawWpm.length>10 ){
          var k = this.rawWpm.length;
          for( var h = 0; h < 10; h++){
              this.processedWpm.push(this.rawWpm[k-1]);
              this.date.push(this.rawDate[k-1].toISOString().substr(5, 2)+ "/" +  this.rawDate[k-1].toISOString().substr(8, 2));
              k--;
          }
      }else{
          this.processedWpm = this.rawWpm;

          for( var i = 0; i < this.rawWpm.length; i++){
              this.date.push(this.rawDate[i].toISOString().substr(5, 2)+ "/" +  this.rawDate[i].toISOString().substr(8, 2));
          }
      }
      this.wpm = this.rawWpm[this.rawWpm.length-1];
      this.typos = this.rawTypos[this.rawTypos.length-1].toString();

  }
//Creates the graphic.
  grahpicRender(){
      var ctx = document.getElementById("myChart");
      // @ts-ignore
      var myCHart =  new Chart(ctx, {type: 'bar',
          data: {
              labels: this.date,
              datasets: [{
                  label: 'Words per Minute',
                  data: this.processedWpm,
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
    //Clear he results and redirects to the home page.
    deleteDataStart(){
      deleteData();
      this.router.navigateByUrl('home');
    }

}
