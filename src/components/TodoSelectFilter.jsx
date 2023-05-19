import PropTypes from "prop-types";

export default function TodoSelectFilter({ filter, onFilterToggle }) {
    return (
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
    );
}

TodoSelectFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterToggle: PropTypes.func.isRequired,
};
