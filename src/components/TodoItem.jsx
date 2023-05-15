import PropTypes from "prop-types";
import cross from "../assets/images/icon-cross.svg";

export default function TodoItem({ index, todo, onComplete, onDelete }) {
    return (
        <li
            className={todo.completed ? "todo-item strikethrough" : "todo-item"}
        >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onComplete}
                className="todo-checkbox"
                id={"myCheckbox" + index}
            />
            <label
                htmlFor={"myCheckbox" + index}
                className="todo-checkbox-label"
            >
                {todo.text}
            </label>
            <img
                className="todo-checkbox-cross"
                src={cross}
                alt="Delete"
                onClick={onDelete}
            />
        </li>
    );
}

TodoItem.propTypes = {
    index: PropTypes.number.isRequired,
    todo: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};
