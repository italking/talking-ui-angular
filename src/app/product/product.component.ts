import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @HostBinding('id')
  public hid = 'content-wrap';
  constructor() { }

  ngOnInit() {
  }

}
