import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {importData} from "../storageHandling";
@Component({
  selector: 'app-reuslts',
  templateUrl: './reuslts.component.html',
  styleUrls: ['./reuslts.component.css']
})
export class ReusltsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   //mportData();
  }

}
