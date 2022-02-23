import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {EventService} from "../event.service";
import {ComunicationService} from "../../services/comunication.service";
import {interval, Subscription} from "rxjs";
import {Router} from "@angular/router";
// @ts-ignore
import {exportData, importData} from '../storageHandling';
import {ReusltsComponent} from "../reuslts/reuslts.component";
import {settingTexts} from "../textSelection";

@Component({
  selector: 'app-traking',
  templateUrl: './traking.component.html',
  styleUrls: ['./traking.component.css']
})
export class TrakingComponent implements OnInit, OnDestroy {

  @Output() whenDone = new EventEmitter<any>();

  time: number | undefined;
  timeLeftMin: number = 9;
  timeLeftSec: number = 9;
  secFormated: string = '';
  text: string | undefined;
  backup: string | undefined;
  control: string[] | undefined;

  isInputOpen: boolean = false;
  controlPos: number = 1;
  j: number = 0;
  iControl: string| undefined;


  rawInput: string | undefined;
  input: string[] | undefined;
  wordsCount: number = 0;
  typos: number = 0;
  typosPos: number[] = new Array();

  constructor(private data: ComunicationService, private router: Router) {}


  subscription: Subscription = new Subscription;
  // @ts-ignore
  message: string;

  ngOnInit(){
    this.subscription = this.data.curentMessage.subscribe(message => this.message = message);
    this.separateParameters(this.message);
    this.coutdown();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
//Gets the raw data received from the selecting component and separates in the appropriated variable.
  separateParameters(raw: string){
    this.time = parseInt(raw[raw.length-1]);
    this.text = settingTexts(parseInt(raw.slice(0,1)));
    this.backup = this.text;
    this.timeLeftMin = this.time;
    this.timeLeftSec = (this.time*60)%this.time;

  }
  interval: any;
//Controls the time and redirects te page on time 0:00.
  coutdown(){
    var delay = false;
    this.interval = setInterval( ()=> {
      this.timeLeftSec--;
      if(this.timeLeftSec<=0 && this.timeLeftMin>0){
        this.timeLeftSec = 60;
        this.timeLeftMin--;
      }else if (this.timeLeftMin<=0 && this.timeLeftSec<=0){
        this.isInputOpen = true;
        this.wordCount();
        clearInterval(this.interval);
        this.router.navigateByUrl('results');
      }
      if(this.timeLeftSec <10){
        this.secFormated = '0' + this.timeLeftSec.toString();
      }else{
        this.secFormated = this.timeLeftSec.toString();

      }

    },1000);
  }
  //Checks the size and spelling of the input. Changes the color and size of the target text accordingly.
  inputControl(){
    // @ts-ignore
   this.control = this.backup.split(/\s+/);
    // @ts-ignore
    this.input = this.rawInput.split(/\s+/);

    for(var i = 0; i<this.input.length; i++){
      var temp = this.control[i];
      if(this.input.length + 2 < this.control.length){
        if(this.control[i].normalize() != this.input[i].normalize()){
          if(i==this.input.length-1){
            this.control[i] = '<font color="#006db0" xmlns="http://www.w3.org/1999/html">' + temp +',</font>';

          }else{
            this.control[i] = '<font color="red" xmlns="http://www.w3.org/1999/html">' + temp +',</font>';
          }
        }
      }else{
        var tempoArrr = this.backup
        this.backup = tempoArrr + " " + settingTexts(parseInt(this.message.slice(0,1)));
      }
    }



    var tempArray;
    var constructed;

    if( this.input.length > 4){
      tempArray = this.control.slice(this.controlPos);
      constructed = tempArray.toString();
      if(this.input[this.j] != this.input[i]){
        this.controlPos++;
      }

    }else{
      constructed = this.control.toString();
    }
    if(this.j > this.input.length){
      this.controlPos--;
    }
    this.j = this.input.length;



    this.text = constructed.replace(/,(?!,)/g, " ");

    }
//Counts the typing speed and subtracts the typos. Then exports the result.
    wordCount(){
      // @ts-ignore
      for(var i = 0; i<this.control.length; i++){
        // @ts-ignore
        if(this.control[i].startsWith('<font color="red"')){
            this.typos++;
        }
      }
      // @ts-ignore
      this.wordsCount = (this.input.length - 1 - this.typos) / this.time;
      var date = new Date;
      var dateString = date.toISOString().substr(0, 11) + date.toTimeString().substr(0, 5);
      exportData(this.wordsCount, dateString, this.typos);

    }


}
