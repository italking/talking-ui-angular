import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTkWindowContent]'
})
export class TkWindowContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
