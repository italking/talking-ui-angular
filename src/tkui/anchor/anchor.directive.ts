import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTkAnchor]'
})
export class AnchorDirective  implements OnInit {

  constructor(
    private elementRef: ElementRef ,
    private renderer: Renderer2
  ) { }

  public ngOnInit() {
    let id   = this.elementRef.nativeElement.getAttribute('href');
    id = id.substr(1, id.length);
    this.renderer.listen(this.elementRef.nativeElement , 'click' ,  (event) => {
      document.getElementById(id).scrollIntoView(true);
      return false;
    });
  }

}
