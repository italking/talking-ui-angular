import { Component, OnInit } from '@angular/core';
import {TkWindowService} from '../../../tkui/window/tk-window.service';
import {TkWindow1Component} from './tk-window1/tk-window1.component';
import {TkWindow2Component} from './tk-window2/tk-window2.component';
import {TkWindow3Component} from './tk-window3/tk-window3.component';
import {TkWindow} from '../../../tkui/window/tk-window';
import {TkWindow4Component} from './tk-window4/tk-window4.component';

@Component({
  selector: 'app-tk-window-info',
  templateUrl: './tk-window-info.component.html',
  styleUrls: ['./tk-window-info.component.css']
})
export class TkWindowInfoComponent implements OnInit {

  constructor(private tkWindowService: TkWindowService) { }

  ngOnInit() {
  }

  public open(no: number): void {
    if ( no === 1) {
      this.tkWindowService.open('window1', TkWindow1Component, true);
    } else if (no === 2) {
      this.tkWindowService.open('window2', TkWindow2Component ,true ,1000 ,200);
    } else if (no === 3) {
      this.tkWindowService.open('window3', TkWindow3Component ,true ,1000 ,200, '数据', true , true);
    } else if (no === 4) {
      const win = new TkWindow()
        .setTitle('window4')
        .setContentComponent(TkWindow3Component)
        .setModel(true).setWidth(1000)
        .setHeight(200)
        .setData('测试')
        .setShowHeader(false);
      this.tkWindowService.open(win);
    }
  }

  public open4() {
    const  win = new TkWindow()
      .setModel(true)
      .setSave(true)
      .setCancel(true)
      .setOnCancel(() => {
        alert('取消');
      }).setOnSave(() => {
        alert('保存');
      }).setContentComponent(TkWindow4Component)
      .setPopinfo({'name': '张三'});
     this.tkWindowService.open(win);
  }
}
