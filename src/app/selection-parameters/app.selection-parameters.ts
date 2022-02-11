import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {LoremIpsum} from "lorem-ipsum";
import {ComunicationService} from "../../services/comunication.service";
import {Subscription} from "rxjs";

export function settingTime(select:number){
    var timeSelected;
    switch (select) {
        case 1:
            timeSelected = 1;
            break;
        case 2:
            timeSelected = 2;
            break;
        case 3:
            timeSelected = 5;
            break;
        default:
            timeSelected = 0;
            break;
    }
    return timeSelected;
}

@Component({
    selector: 'selection-parameters',
    templateUrl: './app.selection-parameters.component.html',
    styleUrls: ['./app.selection-parameters.component.css']
})

export class SelectionParametersComponent implements OnInit, OnDestroy{
    constructor(private router: Router, private  data: ComunicationService) {
    }
    @Output() whenStart = new EventEmitter<any>();
    time: number = 0;
    type: number = 0;
    param: any[] = new Array();
    getOptions(){
        this.decideParameters();
        this.router.navigateByUrl('track');
        
    }

    decideParameters(){
        var textSet = parseInt(this.type.toString());
        var timeSet = settingTime(parseInt(this.time.toString()));
        this.param.push(textSet);
        this.param.push(timeSet);
        this.newMessage();
    }

    subscription: Subscription = new Subscription;
    // @ts-ignore
    message: string;

    ngOnInit(){
        this.subscription = this.data.curentMessage.subscribe(message => this.message = message);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    newMessage() {
        this.data.changeMessage(this.param.toString());
    }

}
