import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tk-multiselect-info',
  templateUrl: './tk-multiselect-info.component.html',
  styleUrls: ['./tk-multiselect-info.component.css']
})
export class TkMultiselectInfoComponent implements OnInit {

  constructor() { }

  public sdata = this.getSelectedData();

  ngOnInit() {
  }

  public getData() {
    return [
      {name: '北京' , value: '1'},
      {name: '上海' , value: '2'},
      {name: '广州' , value: '3'}
      ];
  }

  public getSelectedData() {
    return [
      '1'
    ];
  }

  public change(data) {
    this.sdata = data;
  }
}
