import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers';
import CampusApp from './container/campus';
import CommunityApp from './container/community';

import "./style/index.less";

const root = document.getElementById('J_root');
const loggerMiddleware = createLogger();
let store = createStore(
        reducers,
        applyMiddleware(
                thunkMiddleware, // 允许我们 dispatch() 函数
                loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
        )
);
ReactDOM.render(
        <Provider store={store}>
            <CommunityApp/>
        </Provider>,
        root
);