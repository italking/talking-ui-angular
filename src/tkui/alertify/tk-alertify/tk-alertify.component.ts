import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tk-alertify',
  templateUrl: './tk-alertify.component.html',
  styleUrls: ['./tk-alertify.component.css']
})
export class TkAlertifyComponent implements OnInit {

  @Input()
  public config = {
    message : ''
  };
  constructor() { }

  ngOnInit() {
  }

  public save() {
    if (this['saveWindow']) {
      this['saveWindow']();
    }
  }
}
