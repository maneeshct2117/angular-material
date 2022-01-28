import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterPipe implements PipeTransform {

  transform(inputData:any[], key:string, value:string): any[]  {

    let output:any[] = [];

    if(key != "" && value != "")
    {
      output = inputData.filter( x => x[key].toString().toUpperCase() == value.toUpperCase() );
    }
    else
    {
      output = inputData;
    }
    return output;
  }

}
