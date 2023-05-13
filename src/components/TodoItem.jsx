import PropTypes from "prop-types";
import cross from "../assets/images/icon-cross.svg";

export default function TodoItem({ todo, onComplete, onDelete }) {
    return (
        <li
            className={todo.completed ? "todo-item strikethrough" : "todo-item"}
        >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onComplete}
            />
            <span>{todo.text}</span>
            <img src={cross} alt="Delete" onClick={onDelete} />
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};
