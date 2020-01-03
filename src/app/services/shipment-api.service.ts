import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Shipment } from '@app/models/shipment';

@Injectable({
  providedIn: 'root'
})
export class ShipmentApiService {
  constructor(private httpClient: HttpClient) {}

  fetch(): Observable<Shipment[] | string> {
    return this.httpClient
      .cache()
      .get<Shipment[]>('/shipment/list')
      .pipe(catchError(err => 'Error on fetching shipment list.'));
  }
}
