import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {TkMenu, TkRightMenuService} from './tk-right-menu.service';
import {TkBaseRightMenuComponent} from './tk-base-right-menu/tk-base-right-menu.component';

@Directive({
  selector: '[tkRightMenu]'
})
export class TkRightMenuDirective {

  @Input('component')
  public component;
  @Input('popinfo')
  public popinfo;
  /**
   * 如果使用 info 会使用默认的模板
   * info [{name:'' , type:''}]
   */
  @Input('info')
  public info = null;
  /**
   * 获取info的函数
   */
  @Input('getInfo')
  public getInfo = null;
  @Output('menuClick')
  public menuClick = new EventEmitter<string>();
  constructor(
    private rightMenuService: TkRightMenuService
  ) { }
  @HostListener('mouseup', ['$event'])
  public onClick(event)  {
    if (event.button !== 2) {
        return false;
    }
    const  menu = new TkMenu();
            menu.event      = event;
            if (this.info != null) {
              menu.popinfo     = {info : this.info};
              menu.component   = TkBaseRightMenuComponent;
            } else if (this.getInfo != null) {
              menu.popinfo     = {info : this.getInfo.call()};
              menu.component   = TkBaseRightMenuComponent;
            } else {
              menu.popinfo    = this.popinfo;
              if (!menu.popinfo) {
                menu.popinfo = {};
              }
              menu.component           = this.component;
            }
            menu.popinfo.menuClick  = this.menuClick;
            this.rightMenuService.open(menu);
  }
  @HostListener('document:contextmenu', ['$event'])
  public onContextmenu(event) {
    event.preventDefault();
    return false;
  }
}
