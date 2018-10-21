import { Component, OnInit } from '@angular/core';
import {SimpleRightMenuComponent} from './simple-right-menu/simple-right-menu.component';

@Component({
  selector: 'app-product-right-menu',
  templateUrl: './product-right-menu.component.html',
  styleUrls: ['./product-right-menu.component.css']
})
export class ProductRightMenuComponent implements OnInit {

  public SimpleRightMenuComponent = SimpleRightMenuComponent;
  public datas = [
    {id: 2 , name: '小A' , city : '北京' },
    {id: 3 , name: '小B' , city : '上海' },
    {id: 4 , name: '小C' , city : '广州' },
    {id: 5 , name: '小D' , city : '深圳' }
  ];
  constructor() { }

  ngOnInit() {
  }

  public onMenuClick(type , index) {
    if (type === 'view') {
      alert('查看');
    } else if (type === 'delete') {
       this.datas.splice(index , 1);
    } else if (type === 'edit') {
      alert('修改');
    }
  }

}
