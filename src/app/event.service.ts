import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  choices: any;

  constructor() {
    this.getOptions(1);
  }

  getOptions($event: any){
    return this.choices = "$event";
  }
}
