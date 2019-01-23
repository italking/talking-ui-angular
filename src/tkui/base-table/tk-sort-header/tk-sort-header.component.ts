import {AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: '[tkBtableHeader]',
  templateUrl: './tk-sort-header.component.html',
  styleUrls: ['./tk-sort-header.component.css']
})
export class TkSortHeaderComponent implements OnInit  {

  @Input('default')
  public default  = false;
  @Input('path')
  public path   = null;
  @Input('tkBtableHeader')
  public set tkBtableHeader(v) {
    if (v) {
      this.path = v;
    }
  }
  @Input('desc')
  public desc   = false;
  public active = false;
  constructor() { }
  ngOnInit() {
  }
  @HostListener('click')
  public toSort() {
    if (this.active) {
      this.desc = !this.desc;
    }
    if (this['onSort']) {
        this['onSort'](this.path , this.desc);
    }
  }
}
