import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CaseList from './routes/CaseList';
import Case from './routes/Case';
import UserReport from './routes/UserReport';
import CaseReport from './routes/CaseReport';
import Login from './routes/Login';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/case" exact component={CaseList}/>
        <Route path="/case/:id" component={Case}/>
        <Route path="/user_report" exact component={UserReport}/>
        <Route path="/case_report" exact component={CaseReport}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
