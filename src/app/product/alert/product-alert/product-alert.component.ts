import { Component, OnInit } from '@angular/core';
import {TkAlertifyService} from '../../../../tkui/alertify/tk-alertify.service';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  constructor(
    private alertifyService: TkAlertifyService
  ) { }

  ngOnInit() {
  }

  public alert1() {
    this.alertifyService.alert('警示窗口！' );
  }

  public alert2() {
    this.alertifyService.alert('警示窗口！' , () => {
      alert('callback');
    });
  }
}
