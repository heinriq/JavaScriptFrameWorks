import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'photo',
    templateUrl: `./photo.component.html`
})
export class PhotoComponent {
    @Input() url = '';
    @Input() titulo = '';
    @Input() descricao = '';
    _id = '';
}

