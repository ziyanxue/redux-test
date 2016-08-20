import React,{Component,PropTypes} from 'react'
import Todo from './Todo'

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    todoClickHandle(i, e) {
        this.props.onTodoClick(i);
    }

    render() {
        const {todos=[],filter} = this.props;
        console.log(todos);
        return (
                <ul>
                    {
                        todos.map((todo, i)=> {
                            switch (filter) {

                                case 'SHOW_COMPLETED':
                                    if (todo.completed) {
                                        return <Todo key={i} onClick={()=>(this.todoClickHandle(i))} {...todo}></Todo>
                                    }
                                    break;
                                case 'SHOW_ACTIVE':
                                    if (!todo.completed) {
                                        return <Todo key={i} onClick={()=>(this.todoClickHandle(i))} {...todo}></Todo>
                                    }
                                    break;
                                default:
                                    return <Todo key={i} onClick={()=>(this.todoClickHandle(i))} {...todo}></Todo>
                                    break;

                            }

                        })
                    }
                </ul>
        )
    }
}

TodoList.PropTypes = {
    onTodoClick: PropTypes.func.isRequired,
    filter: PropTypes.string,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool
    }).isRequired).isRequired
}

export default TodoList;
