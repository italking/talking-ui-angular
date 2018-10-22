import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-base-table',
  templateUrl: './product-base-table.component.html',
  styleUrls: ['./product-base-table.component.css']
})
export class ProductBaseTableComponent implements OnInit {

  public key = null;
  public datas = [
    {id: 1 , name: '小A' , city : '北京' },
    {id: 2 , name: '小B' , city : '上海' },
    {id: 3 , name: '小C' , city : '广州' },
    {id: 4 , name: '小D' , city : '深圳' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
