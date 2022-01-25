import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'selection-parameters',
    templateUrl: './app.selection-parameters.component.html',
    styleUrls: ['./app.selection-parameters.component.css']
})

export class SelectionParametersComponent {
    constructor(private router: Router) {
    }
    @Output() whenStart = new EventEmitter<any>();
    time: number = 0;
    type: number = 0;
    GetOptions(){
        var choice = { time: this.time, type: this.type};
        this.whenStart.emit(choice);
        this.router.navigateByUrl('track');
        
    }


}
