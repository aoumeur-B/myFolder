import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upchar'
})
export class UpcharPipe implements PipeTransform {

  transform(value: any, pos?: number): any {
    let output= value;
    if(pos && pos<value.length){
      output = value.substring(0,pos-1); 
      output += value[pos-1].toUpperCase(); 
      output += value.substring(value.length - pos); // fin de la chaine
    }
    return output;
  }

}
