import { outputAst } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeefiter',
  pure:false
})
export class EmployeefiterPipe implements PipeTransform {

  transform(inputData: any[], key: string, value: string): any[] {
    let output: any[] = []
    if (key != "" && value != "") {
      output = inputData.filter(x => x[key].toString().toUpperCase() == value.toUpperCase())
    }
    else

      output = inputData
    return output;
  }

}
