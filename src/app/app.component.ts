import { Component } from '@angular/core';
import {EventService} from "./event.service";
import {slideInAnimation} from "./animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
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
