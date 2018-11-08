import { Component, OnInit } from '@angular/core';
import {TkAlertifyService} from '../../../../tkui/alertify/tk-alertify.service';

@Component({
  selector: 'app-product-notify',
  templateUrl: './product-notify.component.html',
  styleUrls: ['./product-notify.component.css']
})
export class ProductNotifyComponent implements OnInit {

  constructor(
    private alertifyService: TkAlertifyService
  ) { }

  ngOnInit() {
  }

  public info() {
    this.alertifyService.info('这是一个消息');
  }
  public warn() {
    this.alertifyService.warn('这是一个消息');
  }
  public error() {
    this.alertifyService.error('这是一个消息');
  }
  public success() {
    this.alertifyService.success('这是一个消息');
  }

}
