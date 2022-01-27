import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  constructor() { }

  private messageSource = new BehaviorSubject('default message');
  curentMessage = this.messageSource.asObservable();

  changeMessage(message: any){
    this.messageSource.next(message);
  }
}
