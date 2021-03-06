import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
        this.state = {
            data: [
                {id: 1, text: 'cook dinner'},
                {id: 2, text: 'wash dishes'},
                {id: 3, text: 'clean the house'}
            ]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title tasksNumber={this.state.data.length} />
                <TodoList items={this.state.data} removeItem={this.removeTodo} />
            </div>
        );
    }
}

export default App;