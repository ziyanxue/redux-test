//常量
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const FILTER_TODO = 'FILTER_TODO'
export const FILTER_STATES = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}
//action creators
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function completeTodo(i){
    return {
        type : COMPLETE_TODO,
        i
    }
}

export function filterTodo(filter){
    return {
        type : 'FILTER_TODO',
        filter
    }
}