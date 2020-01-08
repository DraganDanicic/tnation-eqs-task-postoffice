import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentComponent } from './shipment.component';
import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentListComponent } from '@app/views/shipment-list/shipment-list.component';
import { ShipmentListModule } from '@app/views/shipment-list/shipment-list.module';
import { ShipmentFormComponent } from '@app/views/shipment-form/shipment-form.component';
import { ShipmentFormModule } from '@app/views/shipment-form/shipment-form.module';

@NgModule({
  declarations: [ShipmentComponent],
  imports: [CommonModule, ShipmentRoutingModule, ShipmentFormModule]
})
export class ShipmentModule {}
