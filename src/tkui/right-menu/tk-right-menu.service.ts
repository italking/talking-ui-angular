import { Injectable } from '@angular/core';
import {TkWindowService} from '../window/tk-window.service';
import {TkWindow} from '../window/tk-window';

@Injectable()
export class TkRightMenuService {
  constructor(
    private windowService: TkWindowService
  ) { }
  private menu;
  public open(menu: TkMenu) {
    this.clear();
    this.menu = menu;
    const ctime = new Date().getTime();
    const win = new TkWindow()
          .setContentComponent(menu.component)
          .setPopinfo(menu.popinfo)
          .setLeft(menu.event.clientX)
          .setTop(menu.event.clientY)
          .setHeight(-1)
          .setWidth(-1)
          .setOnClick(() => {
            this.windowService.close(win);
          }).setOnDocumentClick(() => {
            const etime = new Date().getTime();
            /**
             * 延迟关闭，解决 click 和 mouseup 冲突问题
             */
            if (etime - ctime > 100) {
                  this.windowService.close(win);
                }
              })
          .setAutoCenter(false)
          .setShowHeader(false);
    this.menu['win'] = win;
    this.windowService.open(win);
  }

  public clear() {
    if (this.menu) {
      this.windowService.close(this.menu['win']);
      this.menu = null;
    }
  }
}

export class TkMenu {
   public event;
   public component;
   public popinfo;
}
