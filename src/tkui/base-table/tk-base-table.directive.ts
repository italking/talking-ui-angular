import {AfterContentInit, AfterViewInit, ContentChild, ContentChildren, Directive, Input, QueryList, ViewChildren} from '@angular/core';
import {TkSortHeaderComponent} from './tk-sort-header/tk-sort-header.component';
import {isFunction} from 'util';

@Directive({
  selector: 'table[tkBtable]'
})
export class TkBaseTableDirective implements AfterViewInit {
  public afterViewInit = false;
  public collection;
  /**
   * 被过滤掉添加的属性
   * @type {string}
   */
  @Input('mark')
  public mark = 'filtered';
  @Input('collection')
  public set setCollection(collection) {
    if (!collection) {
      this.collection = [];
      return;
    }
    this.collection = collection;
    /**
     * 重新设置值的时候也需要重新排序
     */
    if (this.afterViewInit) {
      this.active();
      this.sort();
    }
  }

  @Input('tkBtable')
  public set tkBtable(c) {
    if (c) {
      this.setCollection = c;
    }
  }

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
            c[this.mark] = true;
            if ((v + '').indexOf(key) >= 0) {
              c[this.mark] = false;
              return false;
            }
            return true;
          });
        });
      } else {
        cs.forEach(c => {
          c[this.mark] = false;
        });
      }

    } , 300 );
  }

  public getCollection() {
    return this.collection;
  }

  private  getValue(object: any, path: any): any {
    try {
      /**
       * 如果是函数
       */
      if (isFunction(path)) {
        return path.call(null , object);
      } else {
        if (path.indexOf(path) < 0) {
          return object;
        }
        const ps = path.split('.');
        let data = object;
        ps.forEach(p => {
          data = data[p];
        });
        return data;
      }
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
      setTimeout(() => {
        this.active();
        this.sort();
      } , 0);
    }
    this.afterViewInit = true;
  }

}
