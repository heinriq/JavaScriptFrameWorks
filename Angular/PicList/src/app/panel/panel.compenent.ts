import { Component, Input, OnInit } from '@angular/core';
 

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'panel',
    templateUrl: './panel.compenent.html'
})

export class PanelComponent implements OnInit{
    @Input() titulo = ''

    ngOnInit(){
        this.Cut()
    }

    Cut(){
        if(this.titulo.length > 7){
            this.titulo = `${this.titulo.substr(0,7)}`;
        }  
    }
}