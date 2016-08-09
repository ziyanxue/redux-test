import React ,{Component} from 'react'
import Radio from './radio'

class MyForm extends Component{
    constructor (props){
        super(props)
        this.state= {
            my_radio : 'B'
        }
        this.submithandle = this.submithandle.bind(this);
        this.changeHandle = this.changeHandle.bind(this);
    }
    submithandle(e){
        e.preventDefault()
        console.log(this.state.my_radio);
    }
    changeHandle (e){
        var value = e.target.value;
        this.setState({
            my_radio : value
        });
    }
    render(){
        return (
            <form onSubmit={this.submithandle}>
                <Radio name="my_radio" value={this.state.my_radio} onChange={this.changeHandle}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </Radio>
                <button type="submit">确定</button>
            </form>
        )
    }
}

export default MyForm