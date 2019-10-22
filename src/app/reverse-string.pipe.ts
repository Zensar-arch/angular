import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string): any {
    let revStr="";
    for(let i=value.length-1;i>=0;i--){
      revStr +=value.charAt(i);
      
    }
    return revStr;
  }

}
