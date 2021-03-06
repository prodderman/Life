import * as React from 'react';
import { ROUTES_PREFIX } from 'core/constants';
import { Module } from 'shared/types/app';

import { Route } from 'react-router-dom';
import Layout from './view/Layout/Layout';

class GameModule extends Module {
  public getRoutes() {
    return <Route key="life" path={`${ROUTES_PREFIX}/life`} component={Layout} />;
  }
}

export default GameModule;
