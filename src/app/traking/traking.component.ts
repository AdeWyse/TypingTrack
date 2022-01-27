import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {EventService} from "../event.service";
import {ComunicationService} from "../../services/comunication.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-traking',
  templateUrl: './traking.component.html',
  styleUrls: ['./traking.component.css']
})
export class TrakingComponent implements OnInit, OnDestroy {

  @Output() whenDone = new EventEmitter<any>();

  time: number | undefined;
  text: string | undefined;

  constructor(private data: ComunicationService) {}


  subscription: Subscription = new Subscription;
  // @ts-ignore
  message: string;

  ngOnInit(){
    this.subscription = this.data.curentMessage.subscribe(message => this.message = message);
    this.separateParameters(this.message);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  separateParameters(raw: string){
    this.time = parseInt(raw[raw.length-1]);
    this.text = raw.slice(0, raw.length-2);
  }


}
