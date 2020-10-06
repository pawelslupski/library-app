import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genresShow'
})
export class GenresShowPipe implements PipeTransform {

  transform(value: string[]): string {
    if (!value) {
      return '';
    } else {
      return value.join(', ');
    }
  }

}
