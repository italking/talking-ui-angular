import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CommonModule} from '@angular/common';
import {TkAlertCenterService} from './alert/tk.alert.center.service';
import { TkWindowComponent } from './/window/tk-window.component';
import { TkWindowContentDirective } from './/window/tk-window-content.directive';
import { TkWindowCenterComponent } from './/window/tk-window-center.component';
import { TkWindowService } from './/window/tk-window.service';
import { TkDraggableDirective } from './/draggable/tk-draggable-directive.directive';
import { TkTabDirective } from './tab/tk-tab.directive';
import {TkMultiselectComponent} from './multiselect/tk.multiselect.component';
import {TkCoverComponent} from './cover/tk-cover.component';
import {TkCoverService} from './cover/tk-cover.service';
import { TkAlertCenterComponent } from './alert/tk.alert.center.component';
import { TkAlertComponent } from './alert/tk.alert.component';
import {TkSliderComponent} from './slider/tk-slider.component';
import {TkDownloadService} from './download/tk-download.service';
import {TkDownloadComponent} from './download/tk-download.component';
import {TkDropdownMenuDirective} from './dropdown-menu/tk-dropdown-menu.directive';
import {TkChartComponent} from './chart/tk-chart.component';
import {TkAlertifyComponent} from './alertify/tk-alertify/tk-alertify.component';
import {TkConfirmComponent} from './alertify/tk-confirm/tk-confirm.component';
import {TkAlertifyService} from './alertify/tk-alertify.service';
import {AnchorDirective} from './anchor/anchor.directive';
import {TkHighlightDirective} from './highlight/tk-highlight.directive';
import {TkRightMenuDirective} from './right-menu/tk-right-menu.directive';
import {TkRightMenuService} from './right-menu/tk-right-menu.service';

@NgModule({
  declarations: [
    TkAlertCenterComponent,
    TkAlertComponent,
    TkWindowComponent,
    TkWindowContentDirective,
    TkWindowCenterComponent,
    TkDraggableDirective,
    TkTabDirective,
    TkMultiselectComponent,
    TkCoverComponent,
    TkSliderComponent,
    TkDownloadComponent,
    TkDropdownMenuDirective,
    TkChartComponent,
    TkAlertifyComponent,
    TkConfirmComponent,
    AnchorDirective,
    TkHighlightDirective,
    TkRightMenuDirective
  ],
  entryComponents: [
    TkAlertifyComponent,
    TkConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule

  ],
  providers: [
    TkAlertCenterService,
    TkWindowService,
    TkCoverService,
    TkDownloadService,
    TkAlertifyService,
    TkRightMenuService
  ],
  bootstrap: [
  ],
  exports: [
    TkAlertCenterComponent,
    TkAlertComponent,
    TkWindowComponent,
    TkWindowContentDirective,
    TkWindowCenterComponent,
    TkTabDirective,
    TkMultiselectComponent,
    TkCoverComponent,
    TkSliderComponent,
    TkDownloadComponent,
    TkDropdownMenuDirective,
    TkChartComponent,
    TkAlertifyComponent,
    TkAlertifyComponent,
    TkConfirmComponent,
    AnchorDirective,
    TkHighlightDirective,
    TkRightMenuDirective,
  ]
})
export class TkuiModule { }

