import { Component, Input } from '@angular/core'

@Component({
    selector:'photo',
    template:`<img class="img-responsive" [alt]="alt" src="{{path}}">`
})
export class PhotoComponent {
    @Input() path
    @Input() alt
} 