import { Directive } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor() {
    console.log('hello from the appHello directive');
   }

}
