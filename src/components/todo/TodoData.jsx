const TodoData = (props) => {
    const { todoList, deleteTodo } = props

    const todoHandleClick = (id) => {
        deleteTodo(id);
    }

    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <div>
                            <button
                                style={{ cursor: "pointer" }}
                                onClick={() => todoHandleClick(item.id)}
                            >Delete</button>
                        </div>

                    </div>
                )
            })}

        </div >

    )
}
export default TodoData