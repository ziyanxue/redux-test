import React,{Component} from 'react'
import Radio from './radio'

class MyForm extends Component{
    constructor(props){
        super(props)
        this.submitHandle = this.submitHandle.bind(this);
    }
    submitHandle(e){
        e.preventDefault()
        console.log(e);
        console.log(this.refs.radio.state.value);
    }
    render(){

        return (
            <form onSubmit={this.submitHandle}>
                <Radio ref="radio" name="my_radio" defaultValue="B">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </Radio>
                <button type="submit">确定</button>
            </form>
        )
    }
}

export default MyForm;

