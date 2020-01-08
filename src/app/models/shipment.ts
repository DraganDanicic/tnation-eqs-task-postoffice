import { WeightType } from './weight-type';
import { ShipmentType } from './shipment-type';
import { Office } from './office';

export interface Shipment {
  id: string; // "065ecba4-ba31-4154-8bb2-b7ff1726ef14",
  type: ShipmentType;
  origin: boolean;
  destination: boolean;
  delivered: boolean;
  weight: WeightType;
  office: Office;
}
