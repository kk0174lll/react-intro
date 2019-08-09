import React from "react"
import "./TodoList.css"
import TodoItem from "./TodoItem"
import itemsData from "../itemsData"

const todoItems = itemsData.map(item => <TodoItem key={item.id} data={item} />)

function TodoList() {

    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default TodoList