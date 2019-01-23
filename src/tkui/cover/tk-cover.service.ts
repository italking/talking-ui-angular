import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TkCoverService {

  /**
   * 使用一个层进行处理
   * @type {any[]}
   * {zindex:1000 , loading:fasle}
   */
  public covers = [];
  // 遮罩的编号
  public noIndex = 1;
  public showCover    = new Subject<number>();
  public hideCover    = new Subject<void>();
  constructor() { }

  public  show(zindex?: number): number;
  public  show(loading?: boolean): number;
  public  show(zindex: number , loading: boolean): number;
  public  show(): number {
    switch (arguments.length) {
      case 0:
        return this._show(-1 , false);
      case 1:
        if (typeof arguments[0] === 'number') {
         return this._show(arguments[0] , false);
        } else if (typeof arguments[0] === 'boolean') {
          return  this._show(-1 , arguments[0]);
        }
        break;
      case 2:
        if ((typeof arguments[0] === 'number') && (typeof arguments[1] === 'boolean')) {
          return   this._show(arguments[0] , arguments[1]);
        }
    }
  }

  private _show(zindex , loading): number {
    /**
     * 不指定 默认使用最大值
     */
    if (zindex < 0) {
          zindex = this._getTopZindex() + 2;
     }
     const no = this._getNoIndex();
     this.covers.push({zindex: zindex , loading: loading , no: no });
     this._resetState();
     return no;
  }

  /**
   * @param {number} no 指定cover的编号
   */
  public hide(no?: number) {
    if (!this.covers || this.covers.length === 0) {
      return ;
    }
    // 没有指定 no 删除 最上层
    if (arguments.length === 0) {
        this._deleteCoverByNo(this._getTopCover().no);
    } else {
        this._deleteCoverByNo(no);
    }

    this._resetState();
  }

  /**
   * 重新设置 cover 的 zindex
   * @param {number} no
   * @param {number} zindex
   */
  public reset(no: number , zindex: number) {
    if (this.covers.length >= no) {
         this.covers[no].zindex = zindex;
    }
    this._resetState();
  }

  private _resetState() {
    const  cover = this._getTopCover();
    if (cover && cover.zindex > 0) {
      this.showCover.next(cover);
    } else {
      this.hideCover.next();
    }
  }

  private _getTopCover(): any {
    if (!this.covers || this.covers.length === 0) {
      return null;
    }
    let beReturn = this.covers[0];
    for (let i = 0; i < this.covers.length ; i++) {
        if (this.covers[i] && this.covers[i].zindex > beReturn.zindex) {
            beReturn = this.covers[i];
        }
    }
    return beReturn;
  }

  private _findCoverByNo(no: number) {
    for (let i = 0; i < this.covers.length ; i++) {
      if (this.covers[i].no === no) {
        return this.covers[i];
      }
    }
    return null;
  }

  private _deleteCoverByNo(no: number) {
    for (let i = 0; i < this.covers.length ; i++) {
      if (this.covers[i].no === no) {
        this.covers.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  private _getTopZindex(): any {
    const cover = this._getTopCover();
    if (cover) {
      return cover.zindex;
    } else {
      return 1;
    }
  }

  private _getNoIndex() {
    return ++ this.noIndex;
  }


}
