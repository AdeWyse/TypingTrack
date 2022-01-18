import { Component } from '@angular/core';

@Component({
    selector: 'selection-parameters',
    templateUrl: './app.selection-parameters.component.html',
    styleUrls: ['./app.selection-parameters.component.css']
})
export class SelectionParametersComponent {
    GetOptions(){
        console.log('enviando');
    }
}
