import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { TrackingCsvComponent } from './tracking-csv/tracking-csv.component';
import { DxButtonModule, DxDataGridModule, DxFileUploaderModule, DxTextBoxModule, DxTreeListModule } from 'devextreme-angular';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    DxTextBoxModule,
    DxFileUploaderModule,
    DxButtonModule,
    DxDataGridModule,
    DxTreeListModule
  ],
  declarations: [
    PagesComponent,
    TrackingCsvComponent,
  ],
})
export class PagesModule {
}
