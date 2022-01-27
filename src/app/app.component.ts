import { Component } from '@angular/core';
import {EventService} from "./event.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typing-Track';
  timeSet!: number;
  textSet!: number;

  constructor(private service: EventService) {
  }

  selectChoice($event: any){
    this.service.getOptions($event);
  }

}
