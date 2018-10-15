import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tk-slider-info',
  templateUrl: './tk-slider-info.component.html',
  styleUrls: ['./tk-slider-info.component.css']
})
export class TkSliderInfoComponent implements OnInit {

  constructor() { }
  public value = 0;

  ngOnInit() {
  }

  public change(value) {
    this.value = value;
  }

}
