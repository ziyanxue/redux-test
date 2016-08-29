import React,{Component,PropTypes} from 'react'

class AddTodo extends Component {
    constructor (props){
        super(props);
        this.addHandle = this.addHandle.bind(this);
    }
    addHandle(e){
        e.preventDefault();
        const node = this.refs.addIpt;
        const value = node.value.trim();
        this.props.onAddClick(value);
        node.value ='';
    }
    render(){
        return (
            <div>
                <input type="text" ref="addIpt" placeholder="添加todo item"/>
                <button onClick={this.addHandle}>添加</button>
            </div>
        )
    }
}

AddTodo.PropTypes = {
    onAddClick : PropTypes.func.isRequired
}

export default AddTodo
