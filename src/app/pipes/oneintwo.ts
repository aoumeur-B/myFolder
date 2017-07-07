import { PipeTransform, Pipe } from '@angular/core'


@Pipe({
    name: 'oneInTwo'
})

export class OneInTwo implements PipeTransform {
    transform(text: string) {
        let output: any='';

        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0){
                output += text.charAt(i).toLowerCase();
            }else{
                 output += text.charAt(i).toUpperCase();
            }
        }

        // output += (i % 2 === 0)? text[i].toUpperCase() : text[i].toLowerCase();
        return output;
    }


} 