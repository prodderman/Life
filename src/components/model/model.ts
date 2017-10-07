import Event from './../observer/observer';
import { IModel } from './namespace';

export default class Model implements IModel {
  public fieldChanged: Event;

  private _field: Array<Array<boolean>>;
  private _minWidth = 10;
  private _minHeight = 10;

  public constructor(private _width = 50, private _height = 50) {
    this.width = this._width;
    this.height = this._height;
  }
  // accessors
  set height(value: number) {
    if (this._width < this._minWidth) {
      this._width = 50;
    } else {
      this._width = Math.floor(this._width);
    }
  }

  get height() {
    return this._height;
  }

  set width(value: number) {
    if (this._height < this._minHeight) {
      this._height = 50
    } else {
      this._height = Math.floor(this._height);
    }
  }

  get width() {
    return this._width;
  }

  get field() {
    return this._field;
  }

  // public methods
  public nextGeneragion() {

  }

  public toggleCell(cellX: number, cellY: number) {

  }

  public clear() {

  }

  public import(file: JSON) {

  }

  public export() {

  }

  // private methods
}