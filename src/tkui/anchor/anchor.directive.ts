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
    if (id) {
        id = id.trim();
    }
    if (!id.startsWith('#')) {
       id = null;
    } else {
       if (id.length > 1) {
          id = id.substr(1, id.length);
       }
    }
    this.renderer.listen(this.elementRef.nativeElement , 'click' ,  (event) => {
      if (!id) {
        return true;
      } else {
        if (id === '#') {
          document.body.scrollIntoView(true);
          return false;
        } else {
          const node = document.getElementById(id);
          if (node) {
            node .scrollIntoView(true);
            return false;
          }
        }
      }

      return true;
    });
  }

}
