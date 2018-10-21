import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {TkMenu, TkRightMenuService} from './tk-right-menu.service';

@Directive({
  selector: '[appTkRightMenu]'
})
export class TkRightMenuDirective {

  @Input('component')
  public component;
  @Input('popinfo')
  public popinfo;
  @Output('menuClick')
  public menuClick = new EventEmitter<string>();

  constructor(
    private rightMenuService: TkRightMenuService
  ) { }
  @HostListener('mouseup', ['$event'])
  public onClick(event) {
    event.stopPropagation();
    if (event.button !== 2) {
        return false;
    }
    const  menu = new TkMenu();
            menu.event      = event;
            menu.popinfo    = this.popinfo;
            if (!menu.popinfo) {
                 menu.popinfo = {};
            }
            menu.popinfo.menuClick = this.menuClick;
            menu.component  = this.component;
            this.rightMenuService.open(menu);
     return false;
  }
  @HostListener('document:contextmenu', ['$event'])
  public onContextmenu(event) {
    event.preventDefault();
    return false;
  }
}
