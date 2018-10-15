import {Type} from '@angular/core';

export class TkWindow {
  constructor(public title?: string , public contentComponent?: Type <any>) {
  }
  public height = 300;
  public width  = 400;
  public left   = window.innerWidth / 2 - this.width / 2;
  public top    = 120;
  public data: any;
  public zindex = 1000;
  public active = false;
  public model  = false;
  public save   = false;
  public cancel = false;
  public showHeader = true;
  public saveButtonName   = '保存';
  public cancelButtonName = '取消';
  public popinfo;
  public onSave: Function;
  public onCancel: Function;
  public autoCenter = true;
  /**
   * 是否重新执行 ngOnInit 方法
   * @type {boolean}
   */
  public reInit = false;

  public _state    = 0;
  public _oldState = -1;
  public _contentVisibility = 'visible';
  public _cover;

  public _restLeft(): TkWindow {
    this.left   = window.innerWidth / 2 - this.width / 2;
    return this;
  }
  public _restTop(): TkWindow {
    this.top   = window.innerHeight / 2 - this.height / 2;
    if (this.top < 0) {
      this.top = 2;
    }
    return this;
  }

  public instance(): TkWindow {
    return new TkWindow();
  }

  public setTitle(title: string): TkWindow {
    this.title = title;
    return this;
  }

  public setContentComponent(contentComponent: Type <any>): TkWindow {
    this.contentComponent = contentComponent;
    return this;
  }

  public setHeight(height: number): TkWindow {
    this.height = height;
    return this;
  }
  public setWidth(width: number): TkWindow {
    this.width = width;
    return this;
  }
  public setLeft(left: number): TkWindow {
    this.left = left;
    return this;
  }
  public setTop(top: number): TkWindow {
    this.top = top;
    return this;
  }
  public setData(data: any): TkWindow {
    this.data = data;
    return this;
  }
  public setActive(active: boolean): TkWindow {
    this.active = active;
    return this;
  }
  public setModel(model: boolean): TkWindow {
    this.model = model;
    return this;
  }
  public setSave(save: boolean): TkWindow {
    this.save = save;
    return this;
  }
  public setCancel(cancel: boolean): TkWindow {
    this.cancel = cancel;
    return this;
  }
  public setShowHeader(showHeader: boolean): TkWindow {
    this.showHeader = showHeader;
    return this;
  }
  public setSaveButtonName(name: string): TkWindow {
    this.saveButtonName = name;
    return this;
  }
  public setCancelButtonName(name: string): TkWindow {
    this.cancelButtonName = name;
    return this;
  }
  public setPopinfo(popinfo): TkWindow {
    this.popinfo = popinfo;
    return this;
  }

  public setOnSave( onSave: Function): TkWindow {
    this.onSave = onSave;
    return  this;
  }
  public setOnCancel( onCancel: Function): TkWindow {
    this.onCancel = onCancel;
    return  this;
  }
  public setAutoCenter(autoCenter: boolean): TkWindow {
    this.autoCenter = autoCenter;
    return this;
  }

  public setReInit(reInit: boolean): TkWindow {
    this.reInit = reInit;
    return this;
  }

}
