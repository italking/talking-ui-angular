import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {TkWindowService} from './tk-window.service';
import {RightMenuService, TkMenu} from './right-menu.service';

@Directive({
  selector: '[appRightMenu]'
})
export class RightMenuDirective {

  @Input('component')
  public component;
  @Input('popinfo')
  public popinfo;
  @Output('menuClick')
  public menuClick = new EventEmitter<string>();

  constructor(
    private rightMenuService: RightMenuService
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
