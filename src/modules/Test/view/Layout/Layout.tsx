import * as React from 'react';
import block from 'bem-cn';
import { Link } from 'react-router-dom';
import { ROUTES_PREFIX } from 'core/constants';

import './Layout.scss';

class TestLayout extends React.PureComponent<{}, {}> {
  private b = block('test-page');

  public render() {
    const b = this.b;
    return (
      <div className={b()}>
        <header className={b('header')()}>
          <h2 className={b('content')()}>Header</h2>
        </header>
        <main className={b('main')()}>
          <h2 className={b('content')()}>Test page</h2>
          <button><Link to={`${ROUTES_PREFIX}/life`}>Go to the game</Link></button>
        </main>
        <footer className={b('footer')()}>
          <h2 className={b('content')()}>Footer</h2>
        </footer>
      </div>
    );
  }
}

export default TestLayout;
