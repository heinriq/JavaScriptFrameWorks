import { Component, Input } from "@angular/core";

@Component({
    selector: 'panel',
    templateUrl:'./panel.compenent.html'
})

export class PanelComponent{
    @Input() titulo = ''
}