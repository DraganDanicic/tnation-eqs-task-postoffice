export enum WeightDesc {
  small = 'Less than 1kg',
  medium = 'Between 1kg and 5kg',
  big = 'More than 5kg'
}
export interface Shipment {
  id: string; // "065ecba4-ba31-4154-8bb2-b7ff1726ef14",
  type: {
    id: number;
    name: 'package' | 'letter'; //"package"
  };
  origin: boolean;
  destination: boolean;
  delivered: boolean;
  weight: {
    id: number;
    desc: WeightDesc;
  };
  office: {
    id: number; //"ec245151-cda1-466d-9286-1b574a0cc83f",
    PLZ: number; // 80686,
    name: string;
  };
}
