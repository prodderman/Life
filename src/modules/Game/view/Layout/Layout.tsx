import * as React from 'react';
import block from 'bem-cn';

import * as boardEntry from 'features/board';

import './Layout.scss';

class GameLayout extends React.PureComponent<{}, {}> {
  private b = block('game-page');

  public render() {
    const b = this.b;
    const Board = boardEntry.board;
    return (
      <div className={b()}>
        <h1 className={b('title')()}>Game of Life</h1>
        <div className={b('board')()}>
          <Board />
        </div>
      </div>
    );
  }
}

export default GameLayout;
