import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import App from '../routerTest/app'
import Preo from '../routerTest/preo'
import User from '../routerTest/user'
import Home from '../routerTest/home'

/*class Preo extends Component {
 componentWillMount (){
 console.log(2);
 }
 render() {
 return <div>Preo</div>
 }
 }*/

let root = document.getElementById('J_root')
/*
 ReactDOM.render((
 <Router history={hashHistory}>
 <Route path="/" component={App}/>
 <Route path="/preo" component={Preo}/>
 </Router>
 ), root)*/

let routes = (
        <Route path="/" component={App}>
            <Route path='/preo' component={Preo}/>
        </Route>
);
let routes2 = (
        <Route path="app" component={App}>
            ＜Redirect from="preo" to="/preo" />
        </Route>
);
let routes3 = (
        <Route path="/" component={App}>
            <Route path='/preo' component={Preo}/>
            <Route path='/user/:userName/:repoName' component={User}/>
        </Route>
);
let routes4 = (
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path='/preo' component={Preo}/>
            <Route path='/user/:userName/:repoName' component={User}/>
        </Route>
);

ReactDOM.render((
        <Router routes={routes4} history={hashHistory}></Router>
), root);
