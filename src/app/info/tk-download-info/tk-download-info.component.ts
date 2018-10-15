import { Component, OnInit } from '@angular/core';
import {TkDownloadService} from '../../../tkui/download/tk-download.service';


@Component({
  selector: 'app-tk-download-info',
  templateUrl: './tk-download-info.component.html',
  styleUrls: ['./tk-download-info.component.css']
})
export class TkDownloadInfoComponent implements OnInit {

  constructor(
      private downloadService: TkDownloadService
  ) { }

  ngOnInit() {
  }

  public download() {
    this.downloadService.download('/assets/QQ截图20180406093342.png');
  }


}
