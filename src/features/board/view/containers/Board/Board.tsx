import * as React from 'react';
import * as block from 'bem-cn';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IRow } from 'shared/types/models';
import { bind } from 'decko';

import { IAppReduxState } from 'shared/types/app';

import { actions, selectors } from './../../../redux';

import Cell from '../../components/Cell/Cell';
import Button from '../../components/Button/Button';

import './Board.scss';

interface IStateProps {
  grid: IRow[];
  gameStatus: {
    timerId: NodeJS.Timer | null;
    isRunning: boolean;
  };
  generations: number;
}

interface IActionProps {
  toggleAlive: typeof actions.toggleAlive;
  makeRandomGrid: typeof actions.makeRandomGrid;
  tick: typeof actions.tick;
  startPlaying: typeof actions.startPlaying;
  stopPlaying: typeof actions.stopPlaying;
  clear: typeof actions.clear;
}

type IProps = IStateProps & IActionProps;

function mapState(state: IAppReduxState): IStateProps {
  const grid = selectors.getGrid(state);
  const gameStatus = selectors.getGameStatus(state);
  const generations = selectors.getGenerations(state);
  return { grid, gameStatus, generations };
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): IActionProps {
  return bindActionCreators({
    toggleAlive: actions.toggleAlive,
    makeRandomGrid: actions.makeRandomGrid,
    tick: actions.tick,
    startPlaying: actions.startPlaying,
    stopPlaying: actions.stopPlaying,
    clear: actions.clear,
  }, dispatch);
}

const b = block('board');

class Board extends React.Component<IProps> {
  public render() {
    const {
      grid,
      toggleAlive,
      makeRandomGrid,
      tick,
      generations,
      gameStatus,
    } = this.props;
    return (
      <div className={b()}>
        <table className={b('grid')()}>
          <tbody>
            {grid.map((row, i) =>
              <tr key={i}>{row.map((cell, j) => {
                  const handleClick = () => toggleAlive({x: i, y: j});
                  return <Cell key={j} alive={cell.alive} newBorn={cell.newBorn} handleClick={handleClick}/>;
                })}
              </tr>)}
          </tbody>
        </table>
        <div className={b('footer')()}>
          <div className={b('controls')()}>
            <div className={b('button')()}>
              <Button
                title={'Randomize'}
                handleClick={makeRandomGrid}
              />
              <Button
                title={'Clear'}
                handleClick={this.clearGrid}
              />
              <Button
                title={gameStatus.isRunning ? 'Stop' : 'Start'}
                handleClick={this.togglePlay}
              />
              <Button
                title={'Forward'}
                handleClick={tick}
              />
            </div>
          </div>
          <div className={b('counter')()}>
            Generations: {generations}
          </div>
        </div>
      </div>
    );
  }

  @bind
  private togglePlay() {
    if (this.props.gameStatus.isRunning) {
      clearInterval(this.props.gameStatus.timerId as NodeJS.Timer);
      this.props.stopPlaying(this.props.gameStatus.timerId);
    } else {
      const interval = setInterval(this.props.tick, 50);
      this.props.startPlaying(interval);
    }
  }

  @bind
  private clearGrid() {
    if (this.props.gameStatus.isRunning) {
      clearInterval(this.props.gameStatus.timerId as NodeJS.Timer);
      this.props.stopPlaying(this.props.gameStatus.timerId);
    }
    this.props.clear();
  }
}

export { Board };
export default connect<IStateProps, IActionProps>(mapState, mapDispatch)(Board);
