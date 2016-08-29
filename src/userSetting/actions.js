//查询参数更新
export const UPDATE_SEARCH_PARAMS = 'UPDATE_SEARCH_PARAMS';

//查询
export const BEFORE_REQUEST_SEARCH_RESULT = 'BEFORE_REQUEST_SEARCH_RESULT';
export const AFTER_REQUEST_SEARCH_RESULT = 'AFTER_REQUEST_SEARCH_RESULT';
export const UPDATE_SEARCH_RESULT = 'UPDATE_SEARCH_RESULT';

//分页
export const UPDATE_PAGE = 'UPDATE_PAGE';

//添加user
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';

//删除user
export const DEL_USER = 'DEL_USER';

/****************************************/

export function addUser(user,fn) {
    return (dispatch, getState)=> {
        $.ajax({
            url: `/json/userSetting/getUserList.json`,
            method: 'POST',
            dataType: 'json',
            data: user
        }).done(function (res) {
            if (res.isSuccess) {
                fn && fn();
                dispatch(search());
            } else {
                //todo
            }
        }).fail(function (e) {
            //todo
        }).always(function (e) {});
    }
}


export function delUser(id) {
    return (dispatch, getState)=> {
        $.ajax({
            url: `/json/userSetting/getUserList.json`,
            method: 'POST',
            dataType: 'json',
            data: {
                id : id
            }
        }).done(function (res) {
            if (res.isSuccess) {
                dispatch(search());
            } else {
                //todo
            }
        }).fail(function (e) {
            //todo
        }).always(function (e) {});
    }
}

export function updateSearchParams(searchParams) {
    return {
        type: UPDATE_SEARCH_PARAMS,
        searchParams
    }
}

function beforeRequestSearchResult() {
    return {
        type: BEFORE_REQUEST_SEARCH_RESULT
    }
}

function afterRequestSearchRequest() {
    return {
        type: AFTER_REQUEST_SEARCH_RESULT
    }
}

function updateSearchResult(result) {
    return {
        type: UPDATE_SEARCH_RESULT,
        result
    }
}

export function search() {
    return (dispatch, getState)=> {
        const searchParams = getState().searchParams;
        const searchResult = getState().searchResult;
        const curPage = searchResult.curPage;
        const data = Object.assign({}, searchParams, {
            index: curPage
        });
        dispatch(beforeRequestSearchResult());
        $.ajax({
            url: `/json/userSetting/getUserList.json`,
            method: 'POST',
            dataType: 'json',
            data: data
        }).done(function (res) {
            if (res.isSuccess) {
                const data = res.data;
                dispatch(updateSearchResult(data));
            } else {
                //todo
            }
        }).fail(function (e) {
            //todo
        }).always(function (e) {
            dispatch(afterRequestSearchRequest());
        });
    }
}

export function changePage(curPage) {
    return (dispatch, getState)=> {
        dispatch(updatePage(curPage));
        dispatch(search());
    }
}

export function updatePage(curPage) {
    return {
        type: UPDATE_PAGE,
        curPage
    }
}
