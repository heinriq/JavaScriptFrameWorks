import { Component, Input } from '@angular/core'

@Component({
    selector:'photo',
    template:`<img width="{{size}}" [alt]="alt" src="{{path}}">`
})
export class PhotoComponent {
    @Input() path
    @Input() size
    @Input() alt
} 