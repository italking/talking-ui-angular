import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-right-menu',
  templateUrl: './simple-right-menu.component.html',
  styleUrls: ['./simple-right-menu.component.css']
})
export class SimpleRightMenuComponent implements OnInit {

  public menuClick: EventEmitter<string>;
  constructor() { }

  ngOnInit() {
  }
  public delete() {
    this.menuClick.emit('delete');
  }
  public view() {
    this.menuClick.emit('view');
  }
  public edit() {
    this.menuClick.emit('edit');
  }
}
