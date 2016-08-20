import React,{Component,PropTypes} from 'react'

class Todo extends Component{
    constructor (props){
        super(props)
    }
    render(){
        const {text,completed,onClick} = this.props
        return (
            <li onClick={onClick} style={{
                textDecoration: completed ? 'line-through' : 'none',
                cursor: completed ? 'default' : 'pointer'
            }}>{text}</li>
        )
    }
}

Todo.propTypes ={
    text : PropTypes.string.isRequired,
    completed : PropTypes.bool,
    onClick : PropTypes.func.isRequired
}

export default Todo;