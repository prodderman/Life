import * as React from 'react';
import block from 'bem-cn';

import './Layout.scss';

class TestLayout extends React.PureComponent<{}, {}> {
  private b = block('test-page');

  public render() {
    const b = this.b;
    return (
      <div className={b()}>
        <h1 className={b('title')()}>test</h1>
      </div>
    );
  }
}

export default TestLayout;
