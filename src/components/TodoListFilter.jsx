import PropTypes from "prop-types";

export default function TodoListFilter({
    count,
    filter,
    onFilterToggle,
    clearCompleted,
}) {
    return (
        <div className="todo-filter">
            <div className="todo-count">
                <strong>{count}</strong> items left
            </div>
            <div className="todo-list-filter">
                <button
                    className={filter === "all" ? "selected" : ""}
                    onClick={() => onFilterToggle("all")}
                >
                    <strong>All</strong>
                </button>
                <button
                    className={filter === "active" ? "selected" : ""}
                    onClick={() => onFilterToggle("active")}
                >
                    <strong>Active</strong>
                </button>
                <button
                    className={filter === "completed" ? "selected" : ""}
                    onClick={() => onFilterToggle("completed")}
                >
                    <strong>Completed</strong>
                </button>
            </div>
            <div className="todo-clear-completed">
                <button onClick={clearCompleted}>Clear completed</button>
            </div>
        </div>
    );
}

TodoListFilter.propTypes = {
    count: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onFilterToggle: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
};
