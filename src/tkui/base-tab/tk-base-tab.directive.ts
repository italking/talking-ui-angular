import {AfterViewInit, ContentChildren, Directive, EventEmitter, Input, Output, QueryList} from '@angular/core';
import {TkBaseTabHeaderDirective} from './tk-base-tab-header.directive';
import {TkBaseTabContentDirective} from './tk-base-tab-content.directive';

@Directive({
  selector: '[tkBtab]'
})
export class TkBaseTabDirective implements AfterViewInit {

  @Output('show')
  public show: EventEmitter<string> = new EventEmitter<string>();
  public current: TkBaseTabHeaderDirective;
  @Input('tkBtab')
  public set tkBtab(v) {
    this.activeClass = v;
  }
  @Input('activeClass')
  public activeClass;
  @ContentChildren(TkBaseTabHeaderDirective)  headers: QueryList<TkBaseTabHeaderDirective> ;
  @ContentChildren(TkBaseTabContentDirective) contents: QueryList<TkBaseTabContentDirective>;
  constructor() {
  }

  public ngAfterViewInit() {
    let defalut = null;
    this.headers.forEach(h => {
      h['onHeaderClick'] = (header) =>  {
        this._show(header);
      };
      if (h.default) {
           defalut = h;
      }
    });
    if (!defalut) {
      defalut = this.headers.first;
    }
    setTimeout( () => {
      this._show(defalut);
    } , 0);

  }

  private _show(header: TkBaseTabHeaderDirective) {
    /**
     * 关闭原先的
     */
     if (this.current) {
         this.current.hide(this.activeClass);
         const con = this.findContent(this.current.headerName);
         if (con) {
             con.hide(this.activeClass);
         }
      }
       header.show(this.activeClass);
       const content = this.findContent(header.headerName);
       if (content) {
           content.show(this.activeClass);
       }
       this.current = header;
       this.show.emit(this.current.headerName);
  }
  private findContent(name: string) {
    let content = null;
    this.contents.forEach(c => {
      if (c.contentName === name) {
        content = c;
      }
    });
    return content;
  }
}
