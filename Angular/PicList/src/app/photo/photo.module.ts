import { NgModule } from "@angular/core";
import { PhotoComponent } from './photo.component'
import { TitleFilter } from './photo.pipe'
@NgModule({
declarations:[PhotoComponent, TitleFilter],
exports:[PhotoComponent, TitleFilter]
})

export class PhotoModule { }