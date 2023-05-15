import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default function TodoList({ todoList, filter, onComplete, onDelete }) {
    let newTodoList = [...todoList];
    switch (filter) {
        case "active":
            newTodoList = todoList.filter((todo) => !todo.completed);
            break;
        case "completed":
            newTodoList = todoList.filter((todo) => todo.completed);
            break;
        default:
            break;
    }

    return (
        <ul className="todo-list">
            {newTodoList.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    onComplete={() => onComplete(index)}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};
