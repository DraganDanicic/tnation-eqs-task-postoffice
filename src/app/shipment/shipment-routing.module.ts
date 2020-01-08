import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentComponent } from './shipment.component';

import { Shell } from '@app/shell/shell.service';

const routes: Routes = [Shell.childRoutes([{ path: 'shipment/new', component: ShipmentComponent }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ShipmentRoutingModule {}
