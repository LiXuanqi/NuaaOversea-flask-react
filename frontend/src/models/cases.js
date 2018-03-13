import * as casesService from '../services/cases';

export default {
    namespace: 'cases',
    state: {
        cases_list: [],
    },
    reducers: {
        save(state, { payload: { data: newData } }) {
            // console.log(newData.data.posts_list[0].body);
            return { ...state,
                cases_list: newData.data.applications,
            }
        },
    },
    effects: {
        // get all posts.
        *fetchAllCasesList(action, { call, put }) {
            const data = yield call(casesService.fetch);
            console.log(data);
            yield put({
                type: 'save',
                payload: {
                    data,
                },
            });
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname })=> {
                if (pathname === '/case') {
                    dispatch({
                        type: 'fetchAllCasesList',
                    });
                }
            });
        },
    },
};