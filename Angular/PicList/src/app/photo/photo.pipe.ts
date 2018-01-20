import { Pipe, PipeTransform } from '@angular/core';
import { PhotoComponent } from './photo.component';

@Pipe({
    name:'titleFilter'
})

export class TitleFilter implements PipeTransform{
    transform(photoList: PhotoComponent[], search: string) {
        return photoList = photoList.filter( 
            photoIter => photoIter.titulo.toLowerCase().includes(search.toLowerCase())
        )
    }

}
