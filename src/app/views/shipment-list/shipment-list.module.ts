import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentListComponent } from './shipment-list.component';
import { ShipmentApiService } from '@app/services/shipment-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShipmentListService } from '@app/services/shipment-list.service';

@NgModule({
  declarations: [ShipmentListComponent],
  exports: [ShipmentListComponent],
  providers: [ShipmentApiService, ShipmentListService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class ShipmentListModule {}
