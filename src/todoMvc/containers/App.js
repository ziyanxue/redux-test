import React ,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {addTodo,completeTodo,filterTodo,FILTER_STATES} from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {dispatch,filteredTodos,filterState} = this.props;
        return (
                <div>
                    <AddTodo onAddClick={(text)=>dispatch(addTodo(text))}/>
                    <TodoList onTodoClick={(i)=>dispatch(completeTodo(i))} todos={filteredTodos} filter={filterState}/>
                    <Footer onFilterChange={(filter)=>dispatch(filterTodo(filter))} filter={filterState}/>
                </div>
        )

    }
}

//App.propTypes = {}
function selectTodos(todos, filter) {
    switch (filter) {
        case FILTER_STATES.SHOW_ACTIVE:
            return todos.filter((todo, i) => !todo.completed);
            break;
        case FILTER_STATES.SHOW_COMPLETED:
            return todos.filter((todo, i) => todo.completed);
            break
        default:
            return todos;
    }
}

function mapStateToProps(state){
    return {
        filterState : state.filterState,
        visibleTodos : selectTodos(state.todos,state.filterState)
    }
}

export default connect(mapStateToProps)(App)