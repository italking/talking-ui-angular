import { Injectable } from '@angular/core';
import {TkWindowService} from '../window/tk-window.service';
import {TkWindow} from '../window/tk-window';
import {TkAlertifyComponent} from './tk-alertify/tk-alertify.component';
import {TkConfirmComponent} from './tk-confirm/tk-confirm.component';

@Injectable()
export class TkAlertifyService {
  constructor(
    private windowService: TkWindowService
  ) { }

  public alert(message: string , saveCallback?: Function) {
    const win = new TkWindow()
      .setModel(true)
      .setTop(200)
      .setAutoCenter(false)
      .setHeight(-1)
      .setPopinfo({
        config: {
          message: message
        }
      })
      .setContentComponent(TkAlertifyComponent)
      .setShowHeader(false);
    if (saveCallback) {
      win.setOnSave(() => {
        setTimeout(saveCallback , 1);
      });
    }
    this.windowService.open(win);
  }

  public confirm(message: string , saveCallback?: Function ,  cancelCallback?: Function) {
    const win = new TkWindow()
      .setModel(true)
      .setTop(200)
      .setAutoCenter(false)
      .setHeight(-1)
      .setContentComponent(TkConfirmComponent)
      .setPopinfo({
        config: {
          message: message
        }
      })
      .setShowHeader(false);
    if (saveCallback) {
      win.setOnSave(() => {
        setTimeout(saveCallback , 1);
      });
    }
    if (cancelCallback) {
      win.setOnCancel(() => {
        setTimeout(cancelCallback , 1);
      });
    }
    this.windowService.open(win);
  }
}
