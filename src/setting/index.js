import React,{Component,PropTypes} from 'react';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import ReactDOM from 'react-dom';
import {connect,Provider} from 'react-redux';
import reducers from './reducers';
import {setRequestParams,fetchDelUser,fetchUserList,receiveUserList} from './actions'
import List from './components/list';
import Search from './components/Search';



class Start extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const {dispatch,requestParams} = this.props;
        dispatch(fetchUserList(requestParams));
    }
    componentWillReceiveProps(nextProps){
        console.log('receive');
        const {dispatch,requestParams,removedUserId} = nextProps;
        if(JSON.stringify(requestParams) != JSON.stringify(this.props.requestParams)){//查询参数
            dispatch(fetchUserList(requestParams));
        }
        if(removedUserId !== this.props.removedUserId){//删除后
            dispatch(fetchUserList(requestParams));
        }
    }
    // 查询
    searchForm (params={}){
        const {dispatch} = this.props;
        if(JSON.stringify(params) != JSON.stringify(this.props.requestParams)){
            dispatch(setRequestParams(params));
        }
        
    }
    //分页
    pageChange(curPage){
        console.log(curPage);
        const {dispatch,requestParams} = this.props;
        const params = Object.assign({},requestParams,{
            curPage : curPage
        });
        if(JSON.stringify(params) != JSON.stringify(requestParams)){
            dispatch(setRequestParams(params));
        }
    }
    //添加用户
    addUser(){
        const {dispatch} = this.props;
        dispatch(setRequestParams({}));
    }
    // 删除用户
    delUser(user){
        console.log(user.id);
        const {dispatch,requestParams} = this.props;
        dispatch(fetchDelUser(user.id,requestParams));
    } 
    render() {debugger
        const {userList={},requestParams={}} = this.props;
        const {list=[],curPage=2,totalPage=200} = userList;
        console.log(curPage+'//'+totalPage);
        return (
                <div className="main-wrap">
                    <div className="operate-bar">
                        <button className="btn fn-right" onClick={this.addUser.bind(this)}>添加用户</button>
                    </div>
                    <div className="search-bar">
                        <Search {...requestParams} searchForm={this.searchForm.bind(this)}/>
                    </div>
                    <div className="result-box">
                        <List {...userList} delUser={this.delUser.bind(this)}  pageChange={this.pageChange.bind(this)} />
                    </div>
                </div>
        );
    }
}
/*
 function mapStateToProps(state){
 const {select} = state;
 }*/
function mapStateToProps(state){
    return state;
}
let App = connect(mapStateToProps)(Start);
let store = createStore(
        reducers,
        applyMiddleware(thunkMiddleware, createLogger())
);
let root = document.getElementById('J_boot');

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        root
);
