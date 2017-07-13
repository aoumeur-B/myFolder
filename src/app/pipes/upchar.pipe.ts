import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upchar'
})
export class UpcharPipe implements PipeTransform {

  transform(value: any, pos?: number): any {
    let output= value;

    // on vérifie que pos existe
    if(pos && pos> 0 && pos < value.length){
      output = value.substring(0 , pos-1);  // subsring ( [val1, val2[ )
      output += value[pos-1].toUpperCase(); 
      output += value.substring(pos, value.length); // fin de la chaine
    }
    return output;
  }

}
