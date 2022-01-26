import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-traking',
  templateUrl: './traking.component.html',
  styleUrls: ['./traking.component.css']
})
export class TrakingComponent implements OnInit {
  @Input() choiceE: any;
  @Output() whenDone = new EventEmitter<any>();

  constructor() {}


  ngOnInit(): void {
  }



}
