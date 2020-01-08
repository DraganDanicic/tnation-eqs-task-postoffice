import { WeightDesc } from './weight-desc';

export class WeightTypeList {
  static SMALL = { id: 0, desc: WeightDesc.small };
  static MEDIUM = { id: 1, desc: WeightDesc.medium };
  static BIG = { id: 2, desc: WeightDesc.big };
}

export type WeightType = typeof WeightTypeList.SMALL | typeof WeightTypeList.MEDIUM | typeof WeightTypeList.BIG;
