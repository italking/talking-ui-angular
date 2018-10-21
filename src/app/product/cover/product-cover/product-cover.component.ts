import { Component, OnInit } from '@angular/core';
import {TkCoverService} from '../../../../tkui/cover/tk-cover.service';

@Component({
  selector: 'app-product-cover',
  templateUrl: './product-cover.component.html',
  styleUrls: ['./product-cover.component.css']
})
export class ProductCoverComponent implements OnInit {

  constructor(
    private coverService: TkCoverService
  ) { }

  ngOnInit() {
  }

  public show1() {
    this.coverService.show();
    setTimeout( () => {
      this.coverService.hide();
    } , 3000);
  }

}
