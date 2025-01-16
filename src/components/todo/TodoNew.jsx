import { useState } from "react";

const TodoNew = (props) => {
    //useState hook
    // const valueInput = "test";
    const [valueInput, setValueInput] = useState("Test")
    const { addNewTodo } = props

    // addNewTodo("test")
    const handleClick = () => {
        addNewTodo(valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is: {valueInput}
            </div>
        </div>
    )
}
export default TodoNew