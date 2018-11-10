import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[tkBtabHeader]'
})
export class TkBaseTabHeaderDirective {
  @Input('default')
  public default = false;
  public headerName
  @Input('tkBtabHeader')
  public set tkBtabHeader(name) {
    this.headerName = name;
  }
  @HostListener('click') onClick() {
    if (this['onHeaderClick']) {
        this['onHeaderClick'](this);
    }
  }
  constructor(
   private renderer: Renderer2,
   private elementRef: ElementRef
  ) {
  }

  public show(activeClass: string) {
    if (activeClass) {
        this.renderer.addClass(this.elementRef.nativeElement , activeClass);
    }
  }
  public hide(activeClass: string) {
    if (activeClass) {
      this.renderer.removeClass(this.elementRef.nativeElement , activeClass);
    }
  }

}
