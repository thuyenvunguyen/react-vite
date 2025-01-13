const TodoData = (props) => {
    console.log(">> check props:", props)
    const { name, age, data } = props
    return (
        <div className="todo-data">
            <div>My name is: {name}</div>
            <div>my country: {props.data.country}</div>
            <div> Learning react</div>
        </div>
    )
}
export default TodoData