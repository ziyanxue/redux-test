import { combineReducers } from 'redux';
import {REQUEST_PARAMS,DEL_USER,REQUEST_USER_LIST,RECEIVE_USER_LIST,SELECT_USER} from '../actions';

function requestParams(state={}, action) {
    switch (action.type) {
        case REQUEST_PARAMS:
            return action.params;
            break;
        default :
            return state;
            break;
    }
}

function userList(state={}, action) {
    switch (action.type) {
        case RECEIVE_USER_LIST:
        case REQUEST_USER_LIST:
            /*return Object.assign({}, state, {
                list : action.list
            });*/
                return Object.assign({},state,action.userList);
            break;
        default :
            return state;
            break;
    }
}


function removedUserId(state=null,action){
    switch(action.type){
        case DEL_USER:
            return action.id;
        break;
        default:
        return state;
    }
}

const reducers = combineReducers({
    requestParams,
    userList,
    removedUserId
});

export default  reducers;