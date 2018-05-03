import * as React from 'react';
import * as block from 'bem-cn';

import './Cell.scss';
import { bind } from 'decko';

interface IProps {
  alive: boolean;
  newBorn: boolean;
  handleClick: () => void;
}

const b = block('cell');

class Cell extends React.PureComponent<IProps, {}> {
  public render() {
    const { alive, newBorn, handleClick } = this.props;
    return (
      <td
        onClick={handleClick}
        className={`${b()} ${alive ? b({alive: true}) : ''} ${newBorn ? b({'new-born': true})() : ''}`}
      />
    );
  }
}

export default Cell;
