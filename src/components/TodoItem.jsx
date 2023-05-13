import PropTypes from "prop-types";

export default function TodoItem({ todo }) {
    return (
        <li className="todo-item">
            <div className="todo-item-left">
                <input type="checkbox" />
                <span>{todo}</span>
            </div>
            <div className="todo-item-right">
                <button className="remove-todo">X</button>
            </div>
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.string.isRequired,
};
