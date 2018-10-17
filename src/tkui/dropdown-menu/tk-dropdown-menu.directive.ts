import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTkDropdownMenu]'
})
export class TkDropdownMenuDirective implements  AfterViewInit {

  private hideTimeout = null;
  private button:   any;
  private dropdown: any;
  constructor(
    private elementRef: ElementRef ,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    this.button    = this.elementRef.nativeElement.querySelectorAll('[menu]')[0];
    this.renderer.listen(this.button, 'click', (event: any) => {
      event.stopPropagation();
      this._show();
      return false;
    });
    this.renderer.listen(this.button, 'mouseleave', (event: any) => {
       this.hideTimeout = setTimeout(() => {
         this._hide();
       } , 300);
    });
    this.dropdown  = this.elementRef.nativeElement.querySelectorAll('[dropdown]')[0];
    this.renderer.listen(this.dropdown, 'mouseover', (event: any) => {
      this._clearTimeout();
      event.stopPropagation();
      this._show();
    });
    this.renderer.listen(this.dropdown, 'mouseleave', (event: any) => {
      this._clearTimeout();
      event.stopPropagation();
      this._hide();
    });
  }
  private _show() {
    this.renderer.setStyle(this.dropdown, 'display', 'block');
  }
  private _hide() {
    this.renderer.setStyle(this.dropdown, 'display', 'none');
  }
  private _clearTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
}
