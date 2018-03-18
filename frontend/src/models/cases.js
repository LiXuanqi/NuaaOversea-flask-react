import * as casesService from '../services/cases';
import pathToRegexp from 'path-to-regexp';

export default {
    namespace: 'cases',
    state: {
        cases_list: [],
        case_data: {},
        related_cases_list: [],
    },
    reducers: {
        saveAllCasesList(state, { payload: { data: newData } }) {
            // console.log(newData.data.posts_list[0].body);
            return { ...state,
                cases_list: newData.data.applications,
            }
        },
        saveRelatedCasesList(state, { payload: { data: newData } }) {
            // console.log(newData.data.posts_list[0].body);
            return { ...state,
                related_cases_list: newData.data.applications,
            }
        },
        saveOneCase(state, { payload: {data: newData } }) {
            return { ...state,
                case_data: newData.data,
            }
        },
    },
    effects: {
        // get all posts.
        *fetchAllCasesList(action, { call, put }) {
            const data = yield call(casesService.fetch, '/api/applications');
            yield put({
                type: 'saveAllCasesList',
                payload: {
                    data,
                },
            });
        },
        *fetchRelatedCasesListByApplicantId({ payload: applicant_id }, { call, put }) {
            const data = yield call(casesService.fetch, '/api/applications?applicant_id='+applicant_id);
            yield put({
                type: 'saveRelatedCasesList',
                payload: {
                    data,
                },
            });
        },
        *fetchOneCase({ payload: response }, { call, put }){
            const data = yield call(casesService.fetch, '/api/applications/'+response.caseId);
            console.log(data);
            yield put({
                type: 'saveOneCase',
                payload: {
                    data,
                },
            });
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname })=> {
                if (pathToRegexp('/case').exec(pathname)) {
                    dispatch({
                        type: 'fetchAllCasesList',
                    });
                } 
                const match = pathToRegexp('/case/:caseId').exec(pathname);
                if (match) {
                    const caseId = match[1];
                    dispatch({
                        type: 'fetchOneCase',
                        payload: { caseId },
                    });
                }                  
            });
        },
    },
};