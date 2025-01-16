const TodoData = (props) => {
    const { todoList } = props
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <div><button>Delete</button></div>

                    </div>
                )
            })}

            <div>
                {JSON.stringify(todoList)}
            </div>
        </div>

    )
}
export default TodoData