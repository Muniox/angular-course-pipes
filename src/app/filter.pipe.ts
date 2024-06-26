import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false, // dodajemy jeśli chcemy odświeżać pipe, kiedy zmienią sią dane wejściowe
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): unknown {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
