import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory';
import { message } from 'antd';

// 1. Initialize
const app = dva({
    history: createHistory(),
    // It's a workaround way.
    // It should be 'history: browserHistory'(import from dva/router)
    // but the bug is not fixed in the dva^2.1.0
    onError (error) {
        message.error(error.message)
    },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/app').default);
// TODO: app model.
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
