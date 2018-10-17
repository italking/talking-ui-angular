import { Component, OnInit } from '@angular/core';
import {TkAlertifyService} from '../../../../tkui/alertify/tk-alertify.service';

@Component({
  selector: 'app-product-confirm',
  templateUrl: './product-confirm.component.html',
  styleUrls: ['./product-confirm.component.css']
})
export class ProductConfirmComponent implements OnInit {

  constructor(
    private alertifyService: TkAlertifyService
  ) { }

  ngOnInit() {
  }

  public confirm1() {
    this.alertifyService.confirm('Confirm 窗口！');
  }

  public confirm2() {
    this.alertifyService.confirm('Confirm 窗口！' , () => {
      alert('确定');
    },
      () => {
        alert('取消');
      }
    );
  }
}
