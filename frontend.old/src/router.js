import React from 'react';
import PropTypes from 'prop-types'

import { BrowserRouter, Route, Switch } from 'dva/router';
import App from './routes/App';

import IndexPage from './routes/IndexPage';
import CaseReport from './routes/CaseReport';
import UserReport from './routes/UserReport';
import CaseList from './routes/CaseList';
import Case from './routes/Case';

const Main = () => {
    return(
        <Switch>
            <Route exact path='/' component={IndexPage} />
            <Route path='/case_report' component={CaseReport} />
            <Route path='/user_report' component={UserReport} />
            <Route path='/case' component={CasePage} />
        </Switch>
    );
}
const CasePage = () => {
    return(
        <div>
            <h2>This is a roster page!</h2>
            <Switch>
                <Route exact path='/case' component={CaseList}/>
                <Route path='/case/:id' component={test}/>
            </Switch>
        </div>

    );
}
const test = ({ match }) => {
    return(
        <div>
            <p>NUMBER: {match.params.id}</p>
        </div>

    );
}
const RouterConfig = function ({ history, app }) {

    return (
        <BrowserRouter history={history}>
            <App>
                <Switch>
                    <Route component={Main}/>
                    {/* FIXME: if location to '/case/:id' directly, all components will not be rendered. */}
                    {/* <Route component={error} /> */}
                </Switch>
            </App>
        </BrowserRouter>
    )
}
  
RouterConfig.propTypes = {
    history: PropTypes.object,
    app: PropTypes.object,
}

export default RouterConfig;
