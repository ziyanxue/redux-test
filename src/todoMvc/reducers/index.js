import {combineReducers} from 'redux'
import {ADD_TODO,COMPLETE_TODO,FILTER_TODO,FILTER_STATES} from '../actions'

function filterState(state = FILTER_STATES.SHOW_ALL, action) {
    switch (action.type) {
        case FILTER_TODO:
            return action.filter;
            break;
        default:
            return state;
    }
}

function todos(state=[], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text
                }
            ]
            break;
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.i),
                Object.assign({}, state[action.i], {
                    completed: true
                }),
                ...state.slice(action.i + 1)
            ]
            break;
        default :
            return state;
    }
}

//TODO 手动
const reducers = combineReducers({
    filterState,
    todos
});

export default reducers;