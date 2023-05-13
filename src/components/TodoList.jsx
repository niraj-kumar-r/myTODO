// import TodoItem from "./TodoItem";

export default function TodoList() {
    return (
        <ul className="todo-list">
            {/* {todoList.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))} */}
            <li className="todo-item">
                <div className="todo-item-left">
                    <input type="checkbox" />
                    <span>Hello, world</span>
                </div>
                <div className="todo-item-right">
                    <button className="remove-todo">X</button>
                </div>
            </li>
        </ul>
    );
}
