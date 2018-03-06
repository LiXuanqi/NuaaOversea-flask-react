import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CaseList from './routes/CaseList';
import Case from './routes/Case';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/blog" exact component={CaseList}/>
        <Route path="/blog/:id" component={Case}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
