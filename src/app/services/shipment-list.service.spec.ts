import { TestBed } from '@angular/core/testing';

import { ShipmentListService } from './shipment-list.service';

describe('ShipmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShipmentListService = TestBed.get(ShipmentListService);
    expect(service).toBeTruthy();
  });
});
