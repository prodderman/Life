export interface ICell {
  alive: boolean;
  newBorn: boolean;
}

export type IRow = ICell[];

export interface IGridSize {
  width: number;
  height: number;
}
