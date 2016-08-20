import React,{Component} from 'react'

class User extends Component {
    componentWillMount() {
        console.log(2);
    }

    render() {
        return (
                <div>
                    <h4>User</h4>
                    {this.props.params.userName}<br/>
                    {this.props.params.repoName}
                </div>
        )
    }
}

export default User