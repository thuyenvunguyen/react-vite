import { useState } from "react";

const TodoNew = (props) => {
    //useState hook
    // const valueInput = "test";
    const [valueInput, setValueInput] = useState("")
    const { addNewTodo } = props

    // addNewTodo("test")
    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className="todo-new">
            <input
                type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}
export default TodoNew