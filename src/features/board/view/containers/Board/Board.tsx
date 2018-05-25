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
    timerId: number | null;
    isRunning: boolean;
  };
  generations: number;
  gridSize: {
    width: number,
    height: number,
  };
  gameSpeed: number;
  aliveValue: boolean;
}

interface IActionProps {
  setAlive: typeof actions.setAlive;
  makeRandomGrid: typeof actions.makeRandomGrid;
  tick: typeof actions.tick;
  startPlaying: typeof actions.startPlaying;
  stopPlaying: typeof actions.stopPlaying;
  clear: typeof actions.clear;
  resizeGrid: typeof actions.resizeGrid;
  changeSpeed: typeof actions.changeSpeed;
  changeAliveValue: typeof actions.changeAliveValue;
}

type IProps = IStateProps & IActionProps;

function mapState(state: IAppReduxState): IStateProps {
  const grid = selectors.getGrid(state);
  const gameStatus = selectors.getGameStatus(state);
  const generations = selectors.getGenerations(state);
  const gridSize = selectors.getGridSize(state);
  const gameSpeed = selectors.getGameSpeed(state);
  const aliveValue = selectors.getAliveValue(state);
  return { grid, gameStatus, generations, gridSize, gameSpeed, aliveValue };
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): IActionProps {
  return bindActionCreators({
    setAlive: actions.setAlive,
    makeRandomGrid: actions.makeRandomGrid,
    tick: actions.tick,
    startPlaying: actions.startPlaying,
    stopPlaying: actions.stopPlaying,
    clear: actions.clear,
    resizeGrid: actions.resizeGrid,
    changeSpeed: actions.changeSpeed,
    changeAliveValue: actions.changeAliveValue,
  }, dispatch);
}

const b = block('board');

class Board extends React.Component<IProps> {
  public render() {
    const {
      grid,
      setAlive,
      tick,
      generations,
      gameStatus,
      gridSize,
      gameSpeed,
      aliveValue,
      changeAliveValue,
    } = this.props;
    return (
      <div className={b()}>
        <table className={b('grid')()}>
          <tbody>
            {grid.map((row, i) =>
              <tr key={i}>{row.map((cell, j) => {
                  const handleChangeAlive = () => setAlive({x: i, y: j, value: aliveValue});
                  const handleChangeAliveValue = () => changeAliveValue(!cell.alive);
                  return (
                    <Cell
                      key={j}
                      alive={cell.alive}
                      newBorn={cell.newBorn}
                      changeAlive={handleChangeAlive}
                      changeAliveValue={handleChangeAliveValue}
                    />
                  );
                })}
              </tr>)}
          </tbody>
        </table>
        <div className={b('footer')()}>
          <div className={b('counter')()}>
            Generations: {generations}
          </div>
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
                defaultValue={`${-gameSpeed}`}
                min="-1000"
                max="0"
                step="1"
              />
            </div>
            <div className={b('size')()}>
              <input type="number" defaultValue={`${gridSize.width}`} onBlur={this.setGridWidth}/>
              <input type="number" defaultValue={`${gridSize.height}`} onBlur={this.setGridHeight}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  @bind
  private changeSpeed(event: React.ChangeEvent<HTMLInputElement>) {
    const timerVal = Math.abs(parseInt(event.currentTarget.value, 10));
    this.props.changeSpeed(timerVal);
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
      const interval = window.setInterval(this.props.tick, this.props.gameSpeed);
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
