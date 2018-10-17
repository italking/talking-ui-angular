import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {trigger, transition, style, animate, state} from '@angular/animations';
import {TkAlertCenterService} from './tk.alert.center.service';
import {Alert} from './tk.alert';
import {Subscription} from 'rxjs/Subscription';

export type ANIMATION_TYPE = 'none' | 'decent'| 'fancy';

@Component({
  selector: 'app-tk-alert-center',
  styleUrls: ['./tk.alert.center.component.css'],
  template: `
    <div class="alert-container">
      <div class="alert-list">
        <div *ngFor="let alert of getAlerts()" [@animation]="getAnimation()" >
          <app-tk-alert [alert]="alert" [htmlTextEnabled]="htmlTextEnabled" (dismissed)="remove(alert)"></app-tk-alert>
        </div>
      </div>
    </div>
  `,
  animations: [
    /**
     * 定义监控动画的属性状态
     */
    trigger('animation', [
      state('none', style({})),
      state('decent', style([{opacity: 1}, {maxHeight: 300}])),
      state('fancy', style([{transform: 'translateX(0)'}, {transform: 'translateY(0)'}, {opacity: 1}, {maxHeight: 300}])),
      transition('void => fancy', [
        style({opacity: 0, maxHeight: 0, transform: 'translateY(-100%)'}),
        animate('300ms ease-in-out')
      ]),
      transition('fancy => void', [
        animate('300ms ease-in-out', style({transform: 'translateX(100%)', height: 0, opacity: 0}))
      ]),
      transition('void => decent', [
        style({opacity: 0, maxHeight: 0}),
        animate('300ms ease-in-out')
      ]),
      transition('decent => void', [
        animate('300ms ease-in-out', style({height: 0, opacity: 0}))
      ])
    ])
  ]
})
export class TkAlertCenterComponent implements OnInit, OnDestroy {
  @Input() animation: ANIMATION_TYPE = 'fancy';
  @Input() htmlTextEnabled = false;
  @HostBinding('style.z-index') hzindex = '9999';

  private alerts: Alert[] = [];
  private alertSubscription: Subscription;

  constructor(private alertCenterService: TkAlertCenterService) { }

  ngOnInit() {
    this.alertSubscription = this.alertCenterService.alerts.subscribe((alert: Alert) => {
      this.alerts.unshift(alert);
    });
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
  }

  getAlerts(): Alert[] {
    return this.alerts;
  }

  /**
   * 删除
   * @param {Alert} alert
   */
  remove(alert: Alert) {
    if (this.alerts.indexOf(alert) >= 0) {
      this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
  }

  getAnimation(): string {
    return this.animation;
  }

}
