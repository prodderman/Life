import * as React from 'react';
import block from 'bem-cn';
import * as boardEntry from 'features/board';

import './Layout.scss';

class TestLayout extends React.PureComponent<{}, {}> {
  private b = block('test-page');

  public render() {
    const b = this.b;
    const Board = boardEntry.board;
    return (
      <div className={b()}>
        <h1 className={b('title')()}>test</h1>
        <Board />
      </div>
    );
  }
}

export default TestLayout;
