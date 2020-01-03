export enum WeightDesc {
  small = 'Less than 1kg',
  medium = 'Between 1kg and 5kg',
  big = 'More than 5kg'
}
export interface Shipment {
  id: String; // "065ecba4-ba31-4154-8bb2-b7ff1726ef14",
  type: {
    id: Number;
    name: 'package' | 'letter'; //"package"
  };
  origin: Boolean;
  destination: Boolean;
  delivered: Boolean;
  weight: {
    id: Number;
    desc: WeightDesc;
  };
  office: {
    id: Number; //"ec245151-cda1-466d-9286-1b574a0cc83f",
    PLZ: Number; // 80686,
    name: String;
  };
}
