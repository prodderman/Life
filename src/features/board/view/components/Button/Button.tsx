import * as React from 'react';
import * as block from 'bem-cn';

import './Button.scss';

interface IProps {
  title?: string;
  icon?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const b = block('button');

class Button extends React.Component<IProps, {}> {

  public render() {
    const { title = 'button', handleClick } = this.props;
    return (
      <button onClick={handleClick} className="button">
        {title}
      </button>
    );
  }
}

export default Button;
