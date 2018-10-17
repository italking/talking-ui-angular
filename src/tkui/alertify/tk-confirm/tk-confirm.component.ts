import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tk-confirm',
  templateUrl: './tk-confirm.component.html',
  styleUrls: ['./tk-confirm.component.css']
})
export class TkConfirmComponent implements OnInit {

  public config = {
    message: ''
  };
  constructor() { }

  ngOnInit() {
  }

  public save() {
    if (this['saveWindow']) {
      this['saveWindow']();
    }
  }
  public cancel() {
    if (this['cancelWindow']) {
      this['cancelWindow']();
    }
  }
}
