import React,{Component} from 'react'
import ReactDOM from 'react-dom'

console.log(React);
console.log(ReactDOM);

//example1
/*class HelloWorld extends Component {
 handleClick (){
 alert(1);
 }
 render() {
 return (
 <div>
 Hello,It is {this.props.date.toTimeString()}
 <br/>
 <button onClick={this.handleClick}>click</button>
 </div>
 )
 }

 }
 setInterval(function(){
 ReactDOM.render(
 <HelloWorld date={new Date()}/>,
 document.getElementById('root')
 )
 },500)*/

//example2
/*class LikedBtn extends Component {
    constructor() {
        super();
        this.state = {
            liked: false
        };
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var liked = this.state.liked;
        this.setState({
            'liked': !liked
        });
    }

    render() {
        const likedText = this.state.liked ? 'liked' : 'not liked';
        return (
                <div onClick={()=>this.handleClick()}>{likedText}</div>
        )
    }
}

ReactDOM.render(
        <LikedBtn/>,
        document.getElementById('root')
);*/

//example3 没有getInitialState
/*class Input extends Component{
    constructor (props){
        super(props);
        this.state={
            value : 'hello!!!'
        };
    }
    handleChange (e){
        console.log(this);
        console.log(e);
        this.setState({
            value : e.target.value
        })
    }
    render (){
        let value = this.state.value || '';
        return (
                <input type="text" value={value} onChange={(e)=>this.handleChange(e)}/>
        )
    }
}
let Input = React.createClass({
    getInitialState : function(){
        return {
            value : 'hello'
        }
    },
    handleChange : function(e){
        this.setState({
            value : e.target.value
        })
    },
    render :function(){
        let value = this.state.value || '';
        return (
                <input type="text" value={value} onChange={this.handleChange}/>
        )
    }
});

ReactDOM.render(
        <Input/>,
        document.getElementById('root')
);*/

//example4 浏览器中
class InputFocus extends Component{
    constructor (){
        super()
    }
    handleClick (e){
        console.log(this.refs);
        //ReactDOM.findDOMNode(this.refs.focusIpt).focus();
        this.refs.focusIpt.getDOMNode().focus();
    }
    render (){
        return (
                <div>
                    <input type="text" ref="focusIpt" defaultValue="focus"/>
                    <input
                            type="button"
                            onClick={()=>this.handleClick()}
                            value="foucus ipt"
                            />
                </div>
        )
    }
}
ReactDOM.render(
        <InputFocus/>,
        document.getElementById('root')
);