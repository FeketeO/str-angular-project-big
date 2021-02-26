import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(value: any[] | null): any[] | null {

    if (!Array.isArray(value) ) {
      return value;
    }   

    return value.reduce((acc,curr)=>acc+curr);
    
  }

}
