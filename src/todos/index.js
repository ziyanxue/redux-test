import React ,{Component,PropTypes} from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'


class Todos extends Component{
    constructor (props){
        super(props)
    
        this.addTodoHandle = this.addTodoHandle.bind(this)
        this.todoClickHandle = this.todoClickHandle.bind(this)
        this.filterChangeHandle = this.filterChangeHandle.bind(this)
        // 初始state值
        // prop/state
    }
    componentWillMount (){
        this.setState({
            todos : this.props.todos || [],
            filter : this.props.filter || 'SHOW_ALL'
        }) 
    }
    addTodoHandle(text){
        console.log(text);
        let todos = this.state.todos;
        todos.push({
                text : text
            });
        this.setState({
            todos : todos
        });
    }
    todoClickHandle(i){
        console.log(i)
        let todos = this.state.todos;
        todos.map((todo,index)=>{
            if(i==index){
                todo.completed = true;
            }
        });
        this.setState({
            todos : todos
        })
    }
    filterChangeHandle(filter){
         console.log(filter)
        this.setState({
            filter : filter
        });
    }
    render (){
        const { todos=[],filter="SHOW_ALL"} = this.state;
        return (
            <div>
                <AddTodo onAddClick={this.addTodoHandle}/>
                <TodoList onTodoClick={this.todoClickHandle} todos={todos} filter={filter}/>
                <Footer onFilterChange={this.filterChangeHandle} filter={filter}/>
            </div>
        )
    }
}

Todos.propTypes = {
    filter : PropTypes.string,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool
    }).isRequired).isRequired
}

export default Todos