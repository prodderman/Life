import * as React from 'react';
import * as block from 'bem-cn';

import './Cell.scss';
import { bind } from 'decko';

interface IProps {
  alive: boolean;
  newBorn: boolean;
  aliveValue: boolean;
  changeAlive?: (value: boolean) => void;
  changeAliveValue?: (value: boolean) => void;
}

const b = block('cell');

class Cell extends React.PureComponent<IProps, {}> {
  public render() {
    const { alive, newBorn} = this.props;
    return (
      <td
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        className={`${b()} ${alive ? b({alive: true}) : ''} ${newBorn ? b({'new-born': true})() : ''}`}
      />
    );
  }

  @bind
  private handleMouseEnter(event: React.MouseEvent<HTMLTableDataCellElement>) {
    if (event.buttons !== 1) { return; }
    if (this.props.changeAlive) {
      this.props.changeAlive(this.props.aliveValue);
    }
  }

  @bind
  private handleMouseDown() {
    if (this.props.changeAliveValue) {
      this.props.changeAliveValue(!this.props.alive);
    }
    if (this.props.changeAlive) {
      this.props.changeAlive(!this.props.alive);
    }
  }
}

export default Cell;
