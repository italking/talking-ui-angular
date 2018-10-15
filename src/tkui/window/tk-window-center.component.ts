import {Component, OnInit, ElementRef, Renderer2, HostBinding} from '@angular/core';
import {TkWindow} from './tk-window';
import {Subscription} from 'rxjs/Subscription';
import {TkWindowService} from './tk-window.service';
import {TkCoverService} from '../cover/tk-cover.service';

@Component({
  selector: 'app-tk-window-center',
  templateUrl: './tk-window-center.component.html',
  styleUrls: ['./tk-window-center.component.css']
})
export class TkWindowCenterComponent implements OnInit {

  @HostBinding('style.z-index') zindex = 'auto';
  private wins: TkWindow[]   = [];
  /**
   * 当前window的最大 z-index
   * @type {number}
   */
  private maxIndex = 2000;
  /**
   * 最小化的窗口
   * @type {any[]}
   */
  private minWins: TkWindow[] = [];
  private windowSubscription: Subscription;
  constructor(private windowServiceService: TkWindowService ,
                private element: ElementRef, private renderer: Renderer2 , private tkCoverService: TkCoverService) {
  }

  ngOnInit() {
      this.windowSubscription = this.windowServiceService.windows.subscribe((window: TkWindow) => {
        if (window.autoCenter) {
             window._restLeft()
                    ._restTop();
        }
        /**
         * 使用偶数 为模式窗口预留 zindex
         */
        window.zindex = this.maxIndex += 2;
        window.active = true;
        if (window.model) {
            window._cover = this.tkCoverService.show(window.zindex - 1);
        }
        const  win = this._findActiveWindow();
        if (win != null ) {
            win.active = false;
        }

       this.wins.unshift(window);
    });
  }

  getWindows(): TkWindow[] {
    return this.wins;
  }
  getMinWindows(): TkWindow[] {
    return this.minWins;
  }

  /**
   * 删除窗口
   * @param win
   */
  public removeWindow(win) {
    if (this.wins.indexOf(win) >= 0) {
         this.wins.splice(this.wins.indexOf(win), 1);
    }
    this.removeMinWindow(win);
  }
  /**
   * 最小化窗口
   */
  public minWindow(win) {
    this.minWins.push(win);
  }

  /**
   * 删除最小的窗口
   * @param win
   */
  public removeMinWindow(win) {
    if (this.minWins.indexOf(win) >= 0) {
      this.minWins.splice(this.minWins.indexOf(win), 1);
    }
  }

  /**
   * 还原窗口
   * @param win
   */
  public resetWindow(win: TkWindow ) {
    if (win.model) {
      this.tkCoverService.reset(win._cover, win.zindex - 1);
    }
    this.removeMinWindow(win);
    win._state = win._oldState;
    win._oldState = -1;
  }

  /**
   * 窗口放到最前方
   * @param {TkWindow} win
   */
  public activeWindow(win: TkWindow) {
    if (win.active ) {
      return;
    }
    this._setActive(win);
  }

  private _findActiveWindow(): TkWindow {
    for (let i = 0; i < this.wins.length; i++) {
      if (this.wins[i].active) {
          return this.wins[i];
      }
    }
  }

  public _setActive( win: TkWindow) {
    const awin = this._findActiveWindow();
    if (awin != null) {
        awin.active = false;
        const index = awin.zindex;
        awin.zindex = win.zindex;
        win.zindex = index;
        win.active = true ;
        console.log(win.zindex);
    } else {
      win.active = true;
    }
  }

}
