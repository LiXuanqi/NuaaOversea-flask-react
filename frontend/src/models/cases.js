import pathToRegexp from 'path-to-regexp';
import request from '../utils/request';

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
        saveRelatedCasesList(state, { payload: { relatedData: newData } }) {
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
            const data = yield call(request, '/api/applications');
            yield put({
                type: 'saveAllCasesList',
                payload: {
                    data,
                },
            });
        },
        *fetchRelatedCasesListByApplicantId({ payload: applicant_id }, { call, put }) {
            const data = yield call(request, '/api/applications?applicant_id='+applicant_id);
            yield put({
                type: 'saveRelatedCasesList',
                payload: {
                    data,
                },
            });
        },
        *fetchOneCase({ payload: response }, { call, put }){
            // FIXME: this is a workaround, it would be better if I can split it into 2 methods.
            const data = yield call(request, '/api/applications/'+response.caseId);            

            const applicant_id = data.data.applicant_id;
            console.log(applicant_id);
            const relatedData = yield call(request, '/api/applications?applicant_id='+applicant_id);

            yield put({
                type: 'saveOneCase',
                payload: {
                    data,
                },
            });

            yield put({
                type: 'saveRelatedCasesList',
                payload: {
                    relatedData,
                },
            });
        },
        *fetchCasesByQueries({ payload: query_args}, { call, put }){
            let queryStr = '';
            if (query_args.selectedCountry !== "") {
                queryStr = queryStr + (queryStr === '' ? "" : "+") + "country:" + query_args.selectedCountry;
            }
            if (query_args.selectedDegree !== "") {
                queryStr = queryStr + (queryStr === '' ? "" : "+") + "degree:" + query_args.selectedDegree;
            }
            if (query_args.selectedResult !== "") {
                queryStr = queryStr + (queryStr === '' ? "" : "+") + "result:" + query_args.selectedResult;
            }
            if (query_args.selectedTerm.length !== 0) {
                queryStr = queryStr + (queryStr === '' ? "" : "+") + "term:" + query_args.selectedTerm[0] + query_args.selectedTerm[1];
            }
            if (query_args.selectedTags.length !== 0) {
            
                let tags = "";
                for (let i = 0; i < query_args.selectedTags.length; i++) {
                    tags = tags + (i !== 0 ? "*" : "") + query_args.selectedTags[i]
                }
                queryStr = queryStr + (queryStr === '' ? "" : "+") + "tags:" + tags;
            }
            console.log(queryStr);
            if (queryStr !== "" ) {
                const data = yield call(request, '/api/search/applications?q=' + queryStr);
                console.log(data);
                yield put({
                    type: 'saveAllCasesList',
                    payload: {
                        data,
                    },
                });
            }
          
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname })=> {
                if (pathToRegexp('/cases').exec(pathname)) {
                    dispatch({
                        type: 'fetchAllCasesList',
                    });
                } 
                const match = pathToRegexp('/cases/:caseId').exec(pathname);
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