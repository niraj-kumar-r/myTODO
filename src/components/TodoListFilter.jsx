import PropTypes from "prop-types";
import TodoSelectFilter from "./TodoSelectFilter";

export default function TodoListFilter({
    count,
    filter,
    onFilterToggle,
    clearCompleted,
}) {
    const isMobile = window.innerWidth <= 768;
    return (
        <div className="todo-filter">
            <div className="todo-count">
                <strong>{count}</strong> items left
            </div>
            {!isMobile && (
                <TodoSelectFilter
                    filter={filter}
                    onFilterToggle={onFilterToggle}
                />
            )}
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
