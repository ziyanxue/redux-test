import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from '../todoMvc/containers/App'
import reducers from '../todoMvc/reducers'

let store = createStore(reducers)
let root = document.getElementById('J_root')

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        root
);
