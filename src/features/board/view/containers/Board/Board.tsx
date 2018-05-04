import * as React from 'react';
import * as block from 'bem-cn';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IRow } from 'shared/types/models';
import { bind } from 'decko';

import { IAppReduxState } from 'shared/types/app';

import { actions, selectors } from './../../../redux';
import * as NS from '../../../namespace';

import Cell from '../../components/Cell/Cell';
import Button from '../../components/Button/Button';

import './Board.scss';
import { Input } from 'postcss';

interface IStateProps {
  grid: IRow[];
  gameStatus: {
    timerId: number | null;
    isRunning: boolean;
  };
  generations: number;
  gridSize: {
    width: number,
    height: number,
  };
}

interface IActionProps {
  toggleAlive: typeof actions.toggleAlive;
  makeRandomGrid: typeof actions.makeRandomGrid;
  tick: typeof actions.tick;
  startPlaying: typeof actions.startPlaying;
  stopPlaying: typeof actions.stopPlaying;
  clear: typeof actions.clear;
  resizeGrid: typeof actions.resizeGrid;
}

interface IState {
 timerSpeed: number;
 minSpeed: number;
 maxSpeed: number;
}

type IProps = IStateProps & IActionProps;

function mapState(state: IAppReduxState): IStateProps {
  const grid = selectors.getGrid(state);
  const gameStatus = selectors.getGameStatus(state);
  const generations = selectors.getGenerations(state);
  const gridSize = selectors.getGridSize(state);
  return { grid, gameStatus, generations, gridSize };
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): IActionProps {
  return bindActionCreators({
    toggleAlive: actions.toggleAlive,
    makeRandomGrid: actions.makeRandomGrid,
    tick: actions.tick,
    startPlaying: actions.startPlaying,
    stopPlaying: actions.stopPlaying,
    clear: actions.clear,
    resizeGrid: actions.resizeGrid,
  }, dispatch);
}

const b = block('board');

class Board extends React.Component<IProps, IState> {
  public state: IState = {
    timerSpeed: 200,
    minSpeed: 1,
    maxSpeed: 1000,
  };

  public render() {
    const {
      grid,
      toggleAlive,
      makeRandomGrid,
      tick,
      generations,
      gameStatus,
      gridSize,
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
                handleClick={this.randomGrid}
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
            <div className={b('speed')()}>
              speed:
              <input
                type="range"
                onChange={this.changeSpeed}
                defaultValue={`${this.state.maxSpeed - this.state.timerSpeed + this.state.minSpeed}`}
                min={this.state.minSpeed}
                max={this.state.maxSpeed}
                step="1"
              />
            </div>
            <div className={b('size')()}>
              <input type="number" defaultValue={`${gridSize.width}`} onBlur={this.setGridWidth}/>
              <input type="number" defaultValue={`${gridSize.height}`} onBlur={this.setGridHeight}/>
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
  private changeSpeed(event: React.ChangeEvent<HTMLInputElement>) {
    const minVal = parseInt(event.target.min, 10);
    const maxVal = parseInt(event.target.max, 10);
    const timerVal = maxVal - parseInt(event.target.value, 10) + minVal;
    this.setState({timerSpeed: timerVal});
    if (this.props.gameStatus.isRunning) {
      window.clearInterval(this.props.gameStatus.timerId as number);
      const interval = window.setInterval(this.props.tick, timerVal);
      this.props.startPlaying(interval);
    }
  }

  @bind
  private togglePlay() {
    if (this.props.gameStatus.isRunning) {
      window.clearInterval(this.props.gameStatus.timerId as number);
      this.props.stopPlaying(this.props.gameStatus.timerId as number);
    } else {
      const interval = window.setInterval(this.props.tick, this.state.timerSpeed);
      this.props.startPlaying(interval);
    }
  }

  @bind
  private clearGrid() {
    if (this.props.gameStatus.isRunning) {
      window.clearInterval(this.props.gameStatus.timerId as number);
      this.props.stopPlaying(this.props.gameStatus.timerId as number);
    }
    this.props.clear(this.props.gridSize);
  }

  @bind
  private randomGrid() {
    this.props.makeRandomGrid(this.props.gridSize);
  }

  @bind
  private setGridWidth(event: React.FocusEvent<HTMLInputElement>) {
    if (this.props.gameStatus.isRunning) {
      window.clearInterval(this.props.gameStatus.timerId as number);
      this.props.stopPlaying(this.props.gameStatus.timerId as number);
    }
    const newGridSize = {
      width: parseInt(event.currentTarget.value, 10),
      height: this.props.gridSize.height,
    };
    this.props.resizeGrid(newGridSize);
  }

  @bind
  private setGridHeight(event: React.FocusEvent<HTMLInputElement>) {
    if (this.props.gameStatus.isRunning) {
      window.clearInterval(this.props.gameStatus.timerId as number);
      this.props.stopPlaying(this.props.gameStatus.timerId as number);
    }
    const newGridSize = {
      width: this.props.gridSize.width,
      height: parseInt(event.currentTarget.value, 10),
    };
    this.props.resizeGrid(newGridSize);
  }
}

export { Board };
export default connect<IStateProps, IActionProps>(mapState, mapDispatch)(Board);
