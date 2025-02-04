import TodoData from "./TodoData"
import TodoNew from "./TodoNew"
import "./todo.css"
import reactLogo from '../../assets/react.svg'
import { useState } from "react"

const TodoApp = () => {
    const [todoList, setTodoList] = useState([])

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(3, 1000000),
            name: name
        }
        // update 
        setTodoList([...todoList, newTodo])
    }

    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id);
        setTodoList(newTodo);
    }
    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className="todo-container">
            <div className="todo-title"> Todo List </div>
            <TodoNew
                addNewTodo={addNewTodo}
            />

            {todoList.length > 0 ?
                <TodoData
                    todoList={todoList}
                    deleteTodo={deleteTodo}
                />
                :
                <div className="todo-image">
                    <img src={reactLogo} className="logo" />
                </div>
            }
            {/* {todoList.length > 0 &&
          <TodoData
            todoList={todoList}
          />
        }
        {todoList.length === 0 &&
          <div className="todo-image">
            <img src={reactLogo} className="logo" />
          </div>
        } */}
        </div>
    )
}
export default TodoApp