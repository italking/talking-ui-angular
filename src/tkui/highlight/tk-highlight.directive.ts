import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core';
// const hljs: any = require('highlight.js');
import * as hljs from 'highlight.js';
@Directive({
  selector: 'code[appTkHighlight]'
})
export class TkHighlightDirective  implements OnInit , AfterViewInit {

  constructor(
    private elementRef: ElementRef
  ) {
  }

  public ngOnInit() {
    const textarea = this.elementRef.nativeElement.querySelector('textarea');
     if (textarea) {
       this.elementRef.nativeElement.innerHTML = textarea.value;
     }
  }

 public ngAfterViewInit() {
   hljs.highlightBlock(this.elementRef.nativeElement);
  }
}
