import * as React from 'react';
import { ROUTES_PREFIX } from 'core/constants';
import { Module } from 'shared/types/app';

import { Route } from 'react-router-dom';
import Layout from './view/Layout/Layout';

class TestModule extends Module {
  public getRoutes() {
    return <Route key="test" path={`${ROUTES_PREFIX}/test`} component={Layout} />;
  }
}

export default TestModule;
