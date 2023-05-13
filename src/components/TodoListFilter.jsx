import PropTypes from "prop-types";

export default function TodoListFilter({
    count,
    filter,
    onFilterToggle,
    clearCompleted,
}) {
    return (
        <div>
            <div>
                <strong>{count}</strong> items left
            </div>
            <div className="todo-list-filter">
                <button
                    className={filter === "all" ? "selected" : ""}
                    onClick={() => onFilterToggle("all")}
                >
                    All
                </button>
                <button
                    className={filter === "active" ? "selected" : ""}
                    onClick={() => onFilterToggle("active")}
                >
                    Active
                </button>
                <button
                    className={filter === "completed" ? "selected" : ""}
                    onClick={() => onFilterToggle("completed")}
                >
                    Completed
                </button>
            </div>
            <div>
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
