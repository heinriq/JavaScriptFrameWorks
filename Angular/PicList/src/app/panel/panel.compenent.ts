import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'panel',
    templateUrl: './panel.compenent.html'
})

export class PanelComponent{
    @Input() titulo = ''
}