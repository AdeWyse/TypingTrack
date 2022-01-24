import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'selection-parameters',
    templateUrl: './app.selection-parameters.component.html',
    styleUrls: ['./app.selection-parameters.component.css']
})
export class SelectionParametersComponent {

    @Output() whenStart = new EventEmitter<any>();
    time: number = 0;
    type: number = 0;
    GetOptions(){
        console.log('Enviando');
        var choice = { time: this.time, type: this.type};
        this.whenStart.emit(choice);
    }
}
