import React, { Component } from "react"
import "./TodoItem.css"

class TodoItem extends Component {
    constructor(props) {
        super()
        this.state = {
            checked: props.data.completed
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange() {
        this.setState(prevState => {
            return {
                checked: !prevState.checked
            }
        })
    }

    render() {
        return (
            <div className="todo-item">
                <input type="checkbox"
                    id={this.props.data.id}
                    checked={this.state.checked}
                    onChange={this.handleOnChange} />
                <p>{this.props.data.toDoText}</p>
            </div>
        )
    }

}


export default TodoItem