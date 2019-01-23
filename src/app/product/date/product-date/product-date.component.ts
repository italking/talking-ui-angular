import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-date',
  templateUrl: './product-date.component.html',
  styleUrls: ['./product-date.component.css']
})
export class ProductDateComponent implements OnInit {

  public date1 = new Date();
  constructor() { }

  ngOnInit() {
  }

}
