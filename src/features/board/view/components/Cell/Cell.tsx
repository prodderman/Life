import * as React from 'react';
import * as block from 'bem-cn';

import './Cell.scss';
import { bind } from 'decko';

interface IProps {
  alive: boolean;
  newBorn: boolean;
  changeAlive?: (event: React.MouseEvent<HTMLTableDataCellElement>) => void;
  changeAliveValue?: (event: React.MouseEvent<HTMLTableDataCellElement>) => void;
}

const b = block('cell');

class Cell extends React.PureComponent<IProps, {}> {
  public render() {
    const { alive, newBorn} = this.props;
    return (
      <td
        onMouseDown={this.handleMouseDown}
        onMouseOver={this.handleMouseOver}
        className={`${b()} ${alive ? b({alive: true}) : ''} ${newBorn ? b({'new-born': true})() : ''}`}
      />
    );
  }

  @bind
  private handleMouseOver(event: React.MouseEvent<HTMLTableDataCellElement>) {
    if (event.buttons !== 1) { return; }
    if (this.props.changeAlive) {
      this.props.changeAlive(event);
    }
  }

  @bind
  private handleMouseDown(event: React.MouseEvent<HTMLTableDataCellElement>) {
    if (this.props.changeAliveValue) {
      this.props.changeAliveValue(event);
    }
    if (this.props.changeAlive) {
      this.props.changeAlive(event);
    }
  }
}

export default Cell;
