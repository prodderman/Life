import * as React from 'react';
import * as block from 'bem-cn';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IRow } from 'shared/types/models';

import { IAppReduxState } from 'shared/types/app';

import { actions, selectors } from './../../../redux';

import Cell from '../../components/Cell/Cell';

import './Board.scss';

interface IStateProps {
  board: IRow[];
}

interface IActionProps {
  toggleAlive: typeof actions.toggleAlive;
}

type IProps = IStateProps & IActionProps;

function mapState(state: IAppReduxState): IStateProps {
  const board = selectors.getGrid(state);
  return { board };
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): IActionProps {
  return bindActionCreators({
    toggleAlive: actions.toggleAlive,
  }, dispatch);
}

const b = block('board');

class Board extends React.Component<IProps> {
  public render() {
    const { board, toggleAlive } = this.props;
    return (
      <table className={b()}>
        <tbody>
          {board.map((row, i) =>
            <tr key={i}>{row.map((cell, j) => {
                const handleClick = () => toggleAlive({x: i, y: j});
                return <Cell key={j} alive={cell.alive} newBorn={cell.newBorn} handleClick={handleClick}/>;
              })}
            </tr>)}
        </tbody>
      </table>
    );
  }
}

export { Board };
export default connect<IStateProps, IActionProps>(mapState, mapDispatch)(Board);
