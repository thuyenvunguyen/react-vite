const TodoData = (props) => {
    console.log(">> check props:", props)
    const { name, age, data, todoList } = props
    return (
        <div className="todo-data">
            <div>My name is: {name}</div>
            <div>my country: {data.country}</div>
            <div> Learning react</div>
            <div>
                {JSON.stringify(todoList)}
            </div>
        </div>

    )
}
export default TodoData