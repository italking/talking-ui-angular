import { Injectable } from '@angular/core';
import {TkWindow} from '../window/tk-window';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TkDownloadService {

  public downloads    = new Subject<string>();
  constructor() { }

  public download(url: string) {
    this.downloads.next(url);
  }
}
