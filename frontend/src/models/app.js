import * as casesService from '../services/cases';
import pathToRegexp from 'path-to-regexp';
import request from '../utils/request';
export default {
    namespace: 'app',
    state: {
        user_info: {},
    },
    reducers: {

        saveUserInfo(state, { payload: {response}}){
            console.log(response.data);
            if (response.data.success === 'true'){
                return { ...state,
                    user_info: response.data,
                }
            }
            return { ...state,

            }
        },
    },
    effects: {
        *fetchUserInfo(action, { call, put }){
            const response = yield call(request, '/api/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                credentials: 'include'
              });
            yield put({
                type: 'saveUserInfo',
                payload: {
                    response,
                },
            });
        },
        *fetchSession({ payload: args }, { call, put }){
            console.log(args);
            const response = yield call(request, '/api/session?code=' + args.code + '&redirect_uri=' + args.pathname,{
                credentials: 'include'
            })
            console.log(response.data);
            if(response.data.success === 'true'){
                const redirect_uri = response.data.href;
                window.location.href = redirect_uri;
            }
        }

    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, search, push })=> {
    
                if (pathToRegexp('/').exec(pathname)){
                    dispatch({
                        type: 'fetchUserInfo',
                    });
                }     
                var reg = /(\?code=)([^\s]*)/;
                if(search.match(reg)){
                    const code = search.match(reg)[2]
                    dispatch({
                        type: 'fetchSession',
                        payload: { code, pathname, push },
                    });
                }
            });
        },
    },
};