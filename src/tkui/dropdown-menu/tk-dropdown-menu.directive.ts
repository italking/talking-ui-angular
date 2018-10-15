import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTkDropdownMenu]'
})
export class TkDropdownMenuDirective implements  AfterViewInit {

  private button:   any;
  private dropdown: any;
  constructor(
    private elementRef: ElementRef ,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    this.button    = this.elementRef.nativeElement.querySelectorAll('[menu]')[0];
    this.renderer.listen(this.button, 'click', (event: any) => {
      this._show();
    });
    this.dropdown  = this.elementRef.nativeElement.querySelectorAll('[dropdown]')[0];
    this.renderer.listen(this.elementRef.nativeElement, 'mouseout', (event: any) => {
      this._hide();
    });
  }
  private _show() {
    this.renderer.setStyle(this.dropdown, 'display', 'block');
  }
  private _hide() {
    this.renderer.setStyle(this.dropdown, 'display', 'node');
  }
}
