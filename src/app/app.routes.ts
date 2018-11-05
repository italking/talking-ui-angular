import { Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ProductComponent} from './product/product.component';
import {ProductWindowComponent} from './product/window/product-window/product-window.component';
import {ProductRightMenuComponent} from './product/right-menu/product-right-menu/product-right-menu.component';
import {ProductCoverComponent} from './product/cover/product-cover/product-cover.component';
import {ProductAlertComponent} from './product/alert/product-alert/product-alert.component';
import {ProductConfirmComponent} from './product/confirm/product-confirm/product-confirm.component';
import {HomeComponent} from './home/home.component';
import {ProductAnchorComponent} from './product/anchor/product-anchor/product-anchor.component';
import {ProductHighlightComponent} from './product/highlight/product-highlight/product-highlight.component';
import {ProductBaseTableComponent} from './product/base-table/product-base-table.component';
import {ProductBaseTabComponent} from './product/base-tab/product-base-tab/product-base-tab.component';
import {ProductChartComponent} from './product/chart/product-chart/product-chart.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
    children: [{
        path: '',
        component: ProductWindowComponent
      },
      {
        path: 'window',
        component: ProductWindowComponent
      },
      {
        path: 'rightMenu',
        component: ProductRightMenuComponent
      },
      {
        path: 'cover',
        component: ProductCoverComponent
      },
      {
        path: 'alert',
        component: ProductAlertComponent
      },
      {
        path: 'confirm',
        component: ProductConfirmComponent
      },
      {
        path: 'anchor',
        component: ProductAnchorComponent
      },
      {
        path: 'highlight',
        component: ProductHighlightComponent
      },
      {
        path: 'basetable',
        component: ProductBaseTableComponent
      },
      {
        path: 'basetab',
        component: ProductBaseTabComponent
      },
      {
        path: 'chart',
        component: ProductChartComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
];
