import {Injectable, Type} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {TkWindow} from './tk-window';
@Injectable()
export class TkWindowService {

  constructor() { }

  private wins    = new Subject<TkWindow>();
  private minWin  = new Subject<TkWindow>();

  get windows(): Observable<TkWindow> {
    return this.wins;
  }
  public open(window: TkWindow): void ;
  public open(title: string , contentComponent: Type <any> , model?: boolean): void ;
  public open(title: string , contentComponent: Type <any>, model: boolean , width: number , height: number, ): void ;
  public open(title: string , contentComponent: Type <any>, model: boolean , width: number , height: number, data? ): void ;
  public open(title: string , contentComponent: Type <any>, model: boolean , width: number , height: number, data , save: boolean , cancel: boolean): void ;
  public open(): void {
    if (arguments.length === 1) {
      this.wins.next((arguments[0]));
    }

    switch (arguments.length) {
      case 2:
        this.wins.next(new TkWindow(arguments[0] , arguments[1]));
        break;
      case 3:
        let  win = new TkWindow(arguments[0] , arguments[1]);
             win.model = arguments[2];
        this.wins.next(win);
        break;
      case 5:
        win = new TkWindow(arguments[0] , arguments[1]);
        win.model = arguments[2];
        win.width  = arguments[3];
        win.height = arguments[4];
        win._restLeft();
        this.wins.next(win);
        break;
      case 6:
        win = new TkWindow(arguments[0] , arguments[1]);
        win.model = arguments[2];
        win.width  = arguments[3];
        win.height = arguments[4];
        win.data   = arguments[5];
        win._restLeft();
        this.wins.next(win);
        break;
      case 8:
        win = new TkWindow(arguments[0] , arguments[1]);
        win.model = arguments[2];
        win.width  = arguments[3];
        win.height = arguments[4];
        win.data   = arguments[5];
        win.save   = arguments[6];
        win.cancel = arguments[7];
        win._restLeft();
        this.wins.next(win);
        break;
    }
  }

  public _resetMinWindow(win: TkWindow) {
    this.minWin.next(win);
  }
}
