import Event from './../observer/observer';

export interface IModel {
  readonly itemAdded: Event;
  readonly itemRemoved: Event;
  readonly selectedIndexchanged: Event;
  readonly items: Array<string>;
  readonly selectedIndex: number;
}