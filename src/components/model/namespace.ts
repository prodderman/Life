import Event from './../observer/observer';

export interface IModel {
  readonly width: number;
  readonly height: number;
  readonly field: Array<Array<boolean>>;
  readonly fieldChanged: Event;
}