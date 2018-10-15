import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tk-window3',
  templateUrl: './tk-window3.component.html',
  styleUrls: ['./tk-window3.component.css']
})
export class TkWindow3Component implements OnInit {

  public data: any;
  constructor() { }

  ngOnInit() {
  }

  public configData(data ) {
    this.data = data;
  }

  public closeWindow() {
    if (this['removeWindow']) {
        this['removeWindow']();
    }
  }

  public windowSave() {
     alert('Save');
     this.closeWindow();
  }
  public windowCancel() {
    alert('Cancel');
    this.closeWindow();
  }
}
