import PropTypes from "prop-types";
import cross from "../assets/images/icon-cross.svg";

export default function TodoItem({ todo }) {
    return (
        <li className="todo-item">
            <input type="checkbox" />
            <span>{todo}</span>
            <img src={cross} alt="Delete" />
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.string.isRequired,
};
