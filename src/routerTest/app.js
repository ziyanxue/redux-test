import React,{Component} from 'react'
import {Link} from 'react-router'
import NavLink from './navLink'

class App extends Component {
    componentWillMount (){
        console.log(1);
    }
    render() {
        return (
                <div>
                    <h4>App</h4>
                    <Link to="/preo" activeStyle={{color: 'red'}}>Reposssss</Link><br/>
                    <div>{this.props.children}</div>
                </div>
        )
    }
}

export default App;