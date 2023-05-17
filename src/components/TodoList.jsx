import TodoItem from "./TodoItem";
import TodoListFilter from "./TodoListFilter";
import PropTypes from "prop-types";

export default function TodoList({
    todoList,
    filter,
    onFilterToggle,
    onComplete,
    onDelete,
    clearCompleted,
}) {
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
            <TodoListFilter
                count={todoList.reduce(
                    (count, todo) => (todo.completed ? count : count + 1),
                    0
                )}
                filter={filter}
                onFilterToggle={onFilterToggle}
                clearCompleted={clearCompleted}
            />
        </ul>
    );
}

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    onFilterToggle: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
};
