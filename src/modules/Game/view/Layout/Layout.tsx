import * as React from 'react';
import block from 'bem-cn';
import {bind} from 'decko';
import { RouteComponentProps, Link } from 'react-router-dom';
import { ROUTES_PREFIX } from 'core/constants';

import * as boardEntry from 'features/board';

import './Layout.scss';

type IProps = RouteComponentProps<{}>;

class GameLayout extends React.PureComponent<IProps, {}> {
  private b = block('game-page');

  public render() {
    const b = this.b;
    const Board = boardEntry.board;
    return (
      <div className={b()}>
        <header className={b('header')()}>
          <h1 className={b('title')()}>Game of Life</h1>
        </header>
        <main className={b('main')()}>
          <div className={b('board')()}>
            <Board />
          </div>
        </main>
        <footer className={b('footer')()}>
          <Link className={b('link')()} to={`${ROUTES_PREFIX}/test`}>Go to test page</Link>
        </footer>
      </div>
    );
  }
}

export default GameLayout;
