import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {EventService} from "../event.service";
import {ComunicationService} from "../../services/comunication.service";
import {interval, Subscription} from "rxjs";

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

  isInputOpen: boolean = false;

  rawInput: string | undefined;
  wordsCount: number = 0;
  typos: number = 0;

  constructor(private data: ComunicationService) {}


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

  separateParameters(raw: string){
    this.time = parseInt(raw[raw.length-1]);
    this.text = raw.slice(0, raw.length-2);
    this.timeLeftMin = this.time;
    this.timeLeftSec = (this.time*60)%this.time;

  }
  interval: any;

  coutdown(){
    console.log("here", this.timeLeftMin, this.timeLeftSec);

    this.interval = setInterval( ()=> {
      console.log(this.timeLeftMin, this.timeLeftSec);
      this.timeLeftSec--;
      if(this.timeLeftSec<=0 && this.timeLeftMin>0){
        this.timeLeftSec = 60;
        this.timeLeftMin--;
      }else if (this.timeLeftMin<=0 && this.timeLeftSec<=0){
        this.isInputOpen = true;
        clearInterval(this.interval);
      }
      if(this.timeLeftSec <10){
        this.secFormated = '0' + this.timeLeftSec.toString();
      }else{
        this.secFormated = this.timeLeftSec.toString();
      }
      this.inputControl();

    },1000);
  }

  inputControl(){
   // @ts-ignore
    var control = this.text.split(" ");
   // @ts-ignore
    var input = this.rawInput.split(" ");
   var initialSize: number = 0;

   console.log("Control: ", control, "  Input: ", input);

   // @ts-ignore
    if(input.length > initialSize){
     // @ts-ignore
      var place = input.length - 2;
      // @ts-ignore
      if(control[place].normalize() != input[place].normalize()){
        this.isInputOpen = true;
        clearInterval(this.interval);
        this.typos++;
      }

      this.wordsCount = input.length - this.typos;
   }
    console.log(this.wordsCount);


  }


}
