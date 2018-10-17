import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {TkDownloadService} from './tk-download.service';
import { DomSanitizer , SafeResourceUrl} from '@angular/platform-browser';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-tk-download',
  templateUrl: './tk-download.component.html',
  styleUrls: ['./tk-download.component.css']
})
export class TkDownloadComponent implements OnInit , OnDestroy {
  public urlSubscription: Subscription;
  public urls: string[] = [];
  constructor(
    private tkDownloadService: TkDownloadService,
    private sanitizer: DomSanitizer,
    private elementRef: ElementRef
    ) { }


  ngOnInit() {
     this.urlSubscription =  this.tkDownloadService.downloads.subscribe(url => {
        // this.urls.push(url);
        this._createIframe(url);
      });
  }

  ngOnDestroy() {
    this.urlSubscription.unsubscribe();
  }

  public bypassSecurityTrustResourceUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private _createIframe(src: string) {
    const ifrm = document.createElement('iframe');
           ifrm.setAttribute('src', src);
           ifrm.style.display = 'none';
           this.elementRef.nativeElement.appendChild(ifrm);
  }


}
