import fetch from 'isomorphic-fetch';

export const REQUEST_PARAMS = 'REQUEST_PARAMS';//查询参数
// export const PAGING_PARAMS = 'PAGING_PARAMS';//分页参数
export const REQUEST_USER_LIST = 'REQUEST_USER_LIST';
export const RECEIVE_USER_LIST = 'RECEIVE_USER_LIST';
export const DEL_USER = 'DEL_USER';
export const FETCH_ERROR = 'FETCH_ERROR';
// export const SELECT_USER = 'SELECT_USER';

export function setRequestParams(state){
    return {
        type : REQUEST_PARAMS,
        params : state
    }
}

function requestUserList(params) {
    return {
        type: REQUEST_USER_LIST,
        params
    }
}

function receiveUserList(res) {
    console.log(res);
    //todo 判断isSuccess；错误统一处理action
    return {
        type: RECEIVE_USER_LIST,
        userList: {
            list : res.data || [],
            curPage : res.curPage || 1, 
            totalPage: res.totalPage || 1,
            totalNum: res.totalNum || 1
        }
        
    }
}

/*function selectUser(id) {
    return {
        type: SELECT_USER,
        id
    }
}*/


function fetchError(errorMsg){
    return {
        type : FETCH_ERROR,
        errorMsg
    }
}

function delUser(id){
    return {
        type : DEL_USER,
        id
    }
}

export function fetchDelUser(id,params) {
    return dispatch=>{
        return fetch(`/json/setting/getUserList.json`)
                .then(response=>{
                    return response.json(); 
                })
                .then(res=>{
                    // dispatch(fetchUserList(params));
                    dispatch(delUser(id));
                })
    }
}

export function fetchUserList(params){
    console.log(params);
    return dispatch =>{
        console.log('params='+JSON.stringify(params));
        //dispatch(receiveUserList(params));
        // todo brefore 请求
        // return fetch(`https://www.reddit.com/r/${params.reddit}.json`)
        return fetch(`/json/setting/getUserList.json`)
                .then((response)=>{
                    // todo 失败处理
                    return response.json();
                })
                .then((res)=>{
                    console.log(res);
                    dispatch(receiveUserList(res));
                });
    }
}



