import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloDirective } from './hello.directive';



@NgModule({
  declarations: [HelloDirective],
  imports: [
    CommonModule
  ],
  exports: [HelloDirective]
})
export class HelloModule { }
