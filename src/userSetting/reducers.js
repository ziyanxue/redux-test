import {combineReducers} from 'redux';
import {
        UPDATE_SEARCH_PARAMS,
        BEFORE_REQUEST_SEARCH_RESULT,
        AFTER_REQUEST_SEARCH_RESULT,
        UPDATE_SEARCH_RESULT,
        UPDATE_PAGE
} from './actions';

const initSearchParams = {
    type: 1, //todo
    name: "",
    mobile: "",
    startTime: "",
    endTime: ""
};
function searchParams(state = initSearchParams, action) {
    switch (action.type) {
        case UPDATE_SEARCH_PARAMS:
            return Object.assign({},state,action.searchParams);
            break;
        default :
            return state;
    }
}
const initResultState = {
    isLoading: false,
    curPage: 1,
    totalPage: 1,
    totalSize: 1,
    userList: []
};
function searchResult(state = initResultState, action) {
    switch (action.type) {
        case BEFORE_REQUEST_SEARCH_RESULT:
            return Object.assign({}, state, {
                isLoading: true
            });
            break;
        case AFTER_REQUEST_SEARCH_RESULT:
            return Object.assign({}, state, {
                isLoading: false
            });
            break;
        case UPDATE_SEARCH_RESULT:
            return Object.assign({}, state, {
                //curPage : action.result.index,
                totalPage: action.result.totalPage,
                totalSize: action.result.totalSize,
                userList: action.result.userList
            });
            break;
        case UPDATE_PAGE:
            return Object.assign({}, state, {
                curPage: action.curPage
            });
            break;
        default:
            return state;
    }
}

const reducers = combineReducers({
    searchParams,
    searchResult
});

export default reducers;



