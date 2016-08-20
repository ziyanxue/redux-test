import React from 'react'
import ReactDOM from 'react-dom'
import App from '../todos'

const root = document.getElementById('J_root')
const todos = [
    {
        text : "todo1"
    },
    {
        text : "todo2"
    }
];
const filter = 'SHOW_ALL';
ReactDOM.render(
    <App todos={todos} filter={filter}/>,
    root
);