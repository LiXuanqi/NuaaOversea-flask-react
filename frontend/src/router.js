import React from 'react';
import PropTypes from 'prop-types'
import dynamic from 'dva/dynamic'
import { routerRedux, Route, Switch } from 'dva/router';
import App from './routes/App';
import Case from './routes/Case'; // This is a workaround way, if delete, the route of /case/:id can't work.

const { ConnectedRouter } = routerRedux;

const RouterConfig = function ({ history, app }) {
    // const error = dynamic({
    //     app,
    //     component: () => import('./routes/error'),
    // })
    const routes = [
        {
            path: '/',
            component: () => import('./routes/IndexPage'),
        }, {
            path: '/case',
            models: () => [import('./models/cases')],
            component: () => import('./routes/CaseList'),
        }, {
            path: '/user_report',
            component: () => import('./routes/UserReport'),
        }, {
            path: '/case_report',
            component: () => import('./routes/CaseReport'),
        },
    ]

    return (
        <ConnectedRouter history={history}>
            <App>
                <Switch>
                    {
                        routes.map(({ path, ...dynamics }, key) => (
                        <Route key={key}
                            exact
                            path={path}
                            component={dynamic({
                            app,
                            ...dynamics,
                            })}
                        />
                        ))
                    }
                    <Route path='/case/:id' exact component={Case}/>
                    {/* <Route component={error} /> */}
                </Switch>
            </App>
        </ConnectedRouter>
    )
}
  
RouterConfig.propTypes = {
    history: PropTypes.object,
    app: PropTypes.object,
}

export default RouterConfig;
