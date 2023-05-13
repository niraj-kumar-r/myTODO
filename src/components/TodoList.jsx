import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default function TodoList({ todoList }) {
    return (
        <ul className="todo-list">
            {todoList.map((todo, index) => (
                <TodoItem key={index} todo={todo.text} />
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
};
