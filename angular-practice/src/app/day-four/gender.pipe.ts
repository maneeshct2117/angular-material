import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  pure:true
})
export class GenderPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let out = ""
    if (value == "M") {
      out = "Male"
    }
    else if (value = "F") {
      out = "Female"
    }
    return out;
  }

}
