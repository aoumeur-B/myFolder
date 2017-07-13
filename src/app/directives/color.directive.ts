import { Directive,Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  private couleur: string;
  private el:ElementRef;
 /**
  * 
  * @param el paramètre injecté par angular. il permet de drécupérer l'élement sur lequel s'applique la directive
  */


  constructor(el: ElementRef) {
    console.log("instance de ColorDirective");
    this.el = el;
    
  }

@Input()
  set colors(color: string) {
    this.couleur = color;
    this.el.nativeElement.style.backgroundColor = color;
    console.log("set color: ", color);

  }
}
