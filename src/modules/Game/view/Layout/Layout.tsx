import * as React from 'react';
import block from 'bem-cn';
import {bind} from 'decko';
import { RouteComponentProps } from 'react-router-dom';
import { ROUTES_PREFIX } from 'core/constants';

import * as boardEntry from 'features/board';

import './Layout.scss';

type IProps = RouteComponentProps<{}>;

class GameLayout extends React.PureComponent<IProps, {}> {
  private b = block('game-page');

  public render() {
    const b = this.b;
    const Board = boardEntry.board;
    const { history } = this.props;
    return (
      <div className={b()}>
        <h1 className={b('title')()}>Game of Life</h1>
        <div className={b('board')()}>
          <Board />
        </div>
        <div className={b('test-link')()} onClick={this.linkToTest}>Test Router Link</div>
      </div>
    );
  }

  @bind
  private linkToTest() {
    this.props.history.push(`${ROUTES_PREFIX}/test`);
  }
}

export default GameLayout;
