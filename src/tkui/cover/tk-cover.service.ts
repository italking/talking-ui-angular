import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {TkWindow} from '../window/tk-window';

@Injectable()
export class TkCoverService {

  /**
   * 使用一个层进行处理
   * @type {any[]}
   */
  public covers = [];
  public showCover    = new Subject<number>();
  public hideCover   = new Subject<void>();
  constructor() { }

  public show(zindex?: number): number {
    if (arguments.length === 0) {
        zindex = 1000;
     }
     this.covers.push(zindex);
    this._resetState();
     return this.covers.length - 1;
  }

  /**
   * @param {number} no 指定cover的编号
   */
  public hide(no: number) {
    if (this.covers.length >= no && this.covers[no] ) {
        delete  this.covers[no];
    }
    this._resetState();
  }

  public reset(no: number , zindex: number) {
    if (this.covers.length >= no) {
       this.covers[no] = zindex;
    }
    this._resetState();
  }

  private _resetState() {
    const  zindex = this._getMax();
    if (zindex > 0) {
      this.showCover.next(zindex);
    } else {
      this.hideCover.next();
    }
  }

  private _getMax(): number {
    let beReturn = -1;
    for (let i = 0; i < this.covers.length ; i++) {
        if (this.covers[i] && this.covers[i] > beReturn) {
            beReturn = this.covers[i];
        }
    }
    return beReturn;
  }


}
