import { Component, OnInit } from '@angular/core';

import { WeightType, WeightTypeList } from '@app/models/weight-type';
import { ShipmentType, ShipmentTypeList } from '@app/models/shipment-type';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { OfficeApiService } from '@app/services/office-api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.scss']
})
export class ShipmentFormComponent implements OnInit {
  weightDescList: WeightType[] = Object.keys(WeightTypeList).map(key => WeightTypeList[key]);
  shipmentTypeList: ShipmentType[] = Object.keys(ShipmentTypeList).map(key => ShipmentTypeList[key]);

  form: FormGroup;

  officeList: any[] = [];
  isLoadingOffices = false;

  constructor(private fb: FormBuilder, private officeApiService: OfficeApiService) {
    (window as any).shipment = this; // TODO: Remove debug expose.
  }

  ngOnInit() {
    this.form = this.fb.group({
      shipmentType: this.fb.group({
        id: [''],
        name: [{ value: 'None', disabled: true }]
      }),
      weightType: this.fb.group({
        id: [''],
        desc: [{ value: 'None', disabled: true }]
      }),
      origin: [false],
      destination: [false],
      delivered: [false],
      office: this.fb.group({
        id: [''],
        name: [{ value: 'None', disabled: true }],
        PLZ: [{ value: '', disabled: true }]
      })
    });

    this.isLoadingOffices = true;
    this.officeApiService
      .fetch()
      .pipe(
        finalize(() => {
          this.isLoadingOffices = false;
        })
      )
      .subscribe((officeList: any[]) => {
        this.officeList = officeList;
      });
  }
}
