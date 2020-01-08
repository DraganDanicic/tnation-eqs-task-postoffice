export class ShipmentTypeList {
  static LETTER = { id: 0, name: 'letter' };
  static PACKAGE = { id: 1, name: 'package' };
}

export type ShipmentType = typeof ShipmentTypeList.LETTER | typeof ShipmentTypeList.PACKAGE;
