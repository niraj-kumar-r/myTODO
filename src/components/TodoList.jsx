import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default function TodoList({ todoList, onComplete, onDelete }) {
    return (
        <ul className="todo-list">
            {todoList.map((todo, index) => (
                <TodoItem
                    key={index}
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
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};
