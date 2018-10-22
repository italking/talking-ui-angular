import {AfterContentInit, AfterViewInit, ContentChild, ContentChildren, Directive, Input, QueryList, ViewChildren} from '@angular/core';
import {TkSortHeaderComponent} from './tk-sort-header/tk-sort-header.component';

@Directive({
  selector: '[appTkBaseTable]'
})
export class TkBaseTableDirective implements AfterViewInit {

  @Input('collection')
  public collection;

  public desc = false;

  public path = null ;
  @Input('searchPaths')
  public searchPaths = [];

  public _keyword;
  @Input('keyword')
  public set keyword(keyword) {
    this._keyword = keyword;
    this.search(keyword);
  }
  private _preSearch;
  private current;
  @ContentChildren(TkSortHeaderComponent)
  headers: QueryList<TkSortHeaderComponent>;
  constructor() { }


  public sort() {
    const cs = this.getCollection();
    if (!cs) {
      return ;
    }
    cs.sort((c1 , c2) => {
      const  v1 = this.getValue(c1 , this.path);
      const  v2 = this.getValue(c2 , this.path);
      if (!this.desc) {
        return v1 > v2  ? 1 : -1;
      } else {
        return v1 <  v2 ? 1 : -1;
      }
    });
  }

  public search(key: string) {
    if (this.searchPaths.length === 0) {
      return;
    }
    const cs = this.getCollection();
    if (!cs) {
      return ;
    }

    if (this._preSearch) {
      clearTimeout(this._preSearch);
    }

    this._preSearch =  setTimeout( () => {
      if (key &&  key.trim().length > 0) {
        cs.forEach(c => {
          this.searchPaths.every( (t): boolean => {
            const v = this.getValue(c , t);
            c.filterd = true;
            if ((v + '').indexOf(key) >= 0) {
              c.filterd = false;
              return false;
            }
            return true;
          });
        });
      } else {
        cs.forEach(c => {
          c.filterd = false;
        });
      }

    } , 300 );
  }

  public getCollection() {
    return this.collection;
  }

  private  getValue(object: any, path: string): any {
    try {
      if (path.indexOf(path) < 0) {
        return object;
      }
      const ps = path.split('.');
      let data = object;
      ps.forEach(p => {
        data = data[p];
      });
      return data;
    } catch ( e) {
      return null;
    }

  }
  private active() {
    if (!this.current) {
      return ;
    }
    this.path = this.current.path;
    this.desc = this.current.desc;
    this.headers.forEach(h => {
      if (this.current === h) {
          h.active = true;
      } else {
          h.active = false;
      }
    });
  }
  public  ngAfterViewInit() {
    if (!this.headers) {
      return;
    }
    this.headers.forEach( h => {
         h['onSort'] = (path , desc) => {
           this.current = h;
           this.active();
           this.sort();
         };
         if (h.default) {
            this.current = h;
         }
    });
    if (this.current) {
        this.active();
        this.sort();
    }
  }

}