import React, { Component } from "react"
import "./TodoList.css"
import TodoItem from "./TodoItem"


class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            todoItems: []
        }
    }
    componentDidMount() {
        var self = this;
        fetch("http://127.0.0.1:3001/")
            .then(response => response.json())
            .then((data) => self.loadData(data));
    }
    loadData(data) {
        console.log(data);
        this.setState({
            todoItems: data.map(item => <TodoItem key={item.id} data={item} />)
        })
    }
    render() {
        return (
            <div className="todo-list">
                {this.state.todoItems}
            </div>
        )
    }

}

export default TodoList