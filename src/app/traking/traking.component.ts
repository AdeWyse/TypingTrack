import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-traking',
  templateUrl: './traking.component.html',
  styleUrls: ['./traking.component.css']
})
export class TrakingComponent implements OnInit {
  @Input() choice: any;
  constructor() { }

  ngOnInit(): void {
  }

}
