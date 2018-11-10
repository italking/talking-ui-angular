import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-tk-base-right-menu',
  templateUrl: './tk-base-right-menu.component.html',
  styleUrls: ['./tk-base-right-menu.component.css']
})
export class TkBaseRightMenuComponent implements OnInit {

  public menuClick: EventEmitter<string>;
  public info;
  constructor() { }

  ngOnInit() {
  }

  public onClick(type) {
    this.menuClick.emit(type);
  }

}
