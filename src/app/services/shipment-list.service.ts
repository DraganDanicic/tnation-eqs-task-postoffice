import { Injectable } from '@angular/core';
import { Shipment } from '@app/models/shipment';

@Injectable({
  providedIn: 'root'
})
export class ShipmentListService {
  constructor() {}

  // TODO: Provide following fn it as static functionality, or keep it as-is if service shall be used as temp-storage.
  // TODO: Optimize? Search on more fields?
  filter(term: string, list: Shipment[]): Shipment[] {
    term = term.toLocaleLowerCase();
    return list.filter(
      (shipment: Shipment) =>
        -1 !== shipment.office.name.toLowerCase().search(term) || -1 !== (shipment.office.PLZ + '').search(term)
    );
  }
}
