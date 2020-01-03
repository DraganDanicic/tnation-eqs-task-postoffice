import { Component, OnInit } from '@angular/core';
import { Shipment } from '@app/models/shipment';
import { finalize, debounce } from 'rxjs/operators';
import { ShipmentApiService } from '@app/services/shipment-api.service';
import { FormControl } from '@angular/forms';
import { interval } from 'rxjs';
import { ShipmentListService } from '@app/services/shipment-list.service';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent implements OnInit {
  shipmentList: Shipment[] = [];
  shipmentListOrigin: Shipment[] = [];
  isLoading = false;
  filter = new FormControl('');

  constructor(private shipmentApiService: ShipmentApiService, private shipmentListService: ShipmentListService) {}

  ngOnInit() {
    this.isLoading = true;
    this.shipmentApiService
      .fetch()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((shipmentList: Shipment[]) => {
        this.shipmentList = this.shipmentListOrigin = shipmentList;
      });

    this.filter.valueChanges.pipe(debounce(() => interval(500))).subscribe(term => {
      this.shipmentList = this.shipmentListService.filter(term, this.shipmentListOrigin);
    });
  }
}
