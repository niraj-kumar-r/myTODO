import { useEffect, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// import TodoListFilter from "./components/TodoListFilter";s
import TodoFooter from "./components/TodoFooter";
import "./App.css";

function App() {
    const [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem("todoList")) || []
    );
    const [lightMode, setLightMode] = useState(true);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    const handleThemeToggle = () => {
        setLightMode(!lightMode);
        if (lightMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    };

    const handleAddTodo = (text) => {
        if (text !== "") {
            setTodoList([...todoList, { text, completed: false }]);
        }
    };

    const handleCompleteTodo = (index) => {
        const newTodoList = [...todoList];
        newTodoList[index].completed = !newTodoList[index].completed;
        setTodoList(newTodoList);
    };

    const handleDeleteTodo = (index) => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    };

    const handleClearCompleted = () => {
        const newTodoList = todoList.filter((todo) => !todo.completed);
        setTodoList(newTodoList);
    };

    return (
        <>
            <TodoHeader lightMode={lightMode} onToggle={handleThemeToggle} />
            <TodoForm onSubmit={handleAddTodo} />
            {/* <div className="list-container"> */}
            <TodoList
                todoList={todoList}
                filter={filter}
                onFilterToggle={setFilter}
                onComplete={handleCompleteTodo}
                onDelete={handleDeleteTodo}
                clearCompleted={handleClearCompleted}
            />
            {/* <TodoListFilter
                    count={todoList.reduce(
                        (count, todo) => (todo.completed ? count : count + 1),
                        0
                    )}
                    filter={filter}
                    onFilterToggle={setFilter}
                    clearCompleted={handleClearCompleted}
                /> */}
            {/* </div> */}
            <TodoFooter />
        </>
    );
}

export default App;
