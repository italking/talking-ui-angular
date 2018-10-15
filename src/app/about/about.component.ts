import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: '[app-about]',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @HostBinding('id')
  public hid = 'content-wrap';
  constructor() { }

  ngOnInit() {
  }

}
