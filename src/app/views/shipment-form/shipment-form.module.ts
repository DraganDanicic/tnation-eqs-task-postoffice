import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentFormComponent } from './shipment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ShipmentFormComponent],
  exports: [ShipmentFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbDropdownModule, NgbButtonsModule]
})
export class ShipmentFormModule {}
