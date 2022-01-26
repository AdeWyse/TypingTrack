import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typing-Track';
  timeSet!: number;
  textSet!: number;
  getOptions($event: any){
    var choiceE = $event;
    this.timeSet = $event.time;
    this.textSet = $event.text;
  }

}
