import {Component, Input, OnInit} from '@angular/core';
import {settingText} from "./textHandler";

@Component({
  selector: 'app-traking',
  templateUrl: './traking.component.html',
  styleUrls: ['./traking.component.css']
})
export class TrakingComponent implements OnInit {
  @Input() choice: any;

  textToType: string = 'teste';

  constructor() {}


  ngOnInit(): void {
    this.textToType = settingText(1);
  }

}
