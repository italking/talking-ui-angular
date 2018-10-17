import {Directive, ElementRef, AfterViewInit, Renderer2, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appTkTab]'
})
export class TkTabDirective implements   OnInit , AfterViewInit {

  constructor(private elementRef: ElementRef ,  private renderer: Renderer2) {

  }
  private activeName: string;
  /**
   * 触发切换事件
   * @type {EventEmitter}
   */
  @Output() show: EventEmitter<number> = new EventEmitter<number>();
  @Input() activeClass;
  ngOnInit() {

  }

  ngAfterViewInit() {
    this.hideAllContent();
    this.queryAllHeaders().forEach((item: any) => {
      this.renderer.listen(item, 'click', (event: any) => {
        this.headerClick(event, item);
      });
    });
    this.showTab(this.queryAllHeaders()[0]);
  }

  public hideAllContent() {
    this.queryAllContents().forEach((item: any) => {
      this.renderer.setStyle(item, 'display', 'none');
    });
    if (this.activeClass != null ) {
      this.queryAllHeaders().forEach((item: any) => {
        this.renderer.removeClass(item, this.activeClass);
      });
    }
  }
  public showTab(header): void {
    const name = header.getAttribute('tabHeader');
    if (name === this.activeName) {
      return;
    }
    this.hideAllContent();
    let content = null; // this.elementRef.nativeElement.querySelector('[tabContent="' + name + '"]');
    this.queryAllContents().forEach( con => {
      if (con.getAttribute('tabContent') === name ) {
          content = con;
      }
    });


    this.renderer.setStyle(content , 'display', 'block');
    if (this.activeClass != null) {
      this.renderer.addClass(header , this.activeClass);
    }
    this.show.emit(name);
  }

  public headerClick(event, item): any {
    event.stopPropagation();
    event.preventDefault();
    this.showTab(item);
    return false;
  }

  private queryAllHeaders(): any[] {
   let headers  = [];
   this.elementRef.nativeElement.querySelectorAll('[tabHeader]').forEach( header => {
       headers.push(header);
   });
   const eheaders = [];
   this.elementRef.nativeElement.querySelectorAll('[appTkTab]').forEach(tab => {
      tab.querySelectorAll('[tabHeader]').forEach(header => {
        eheaders.push(header);
      });
   });

    headers = headers.filter(header => {
      if (eheaders.indexOf(header) >= 0 ) {
        return false;
      } else {
        return true;
      }
    });
   return headers;
  }

  private queryAllContents(): any[] {
    let contents  = [];
    this.elementRef.nativeElement.querySelectorAll('[tabContent]').forEach( header => {
      contents.push(header);
    });
    const econtents = [];
    this.elementRef.nativeElement.querySelectorAll('[appTkTab]').forEach(tab => {
      tab.querySelectorAll('[tabContent]').forEach(header => {
        econtents.push(header);
      });
    });

    contents = contents.filter(header => {
      if (econtents.indexOf(header) >= 0 ) {
        return false;
      } else {
        return true;
      }
    });
    return contents;
  }

}
