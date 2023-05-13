export default function TodoListFilter() {
    return (
        <div>
            <div>
                <strong>0</strong> items left
            </div>
            <div className="todo-list-filter">
                <button className="selected">All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div>
                <button>Clear completed</button>
            </div>
        </div>
    );
}
