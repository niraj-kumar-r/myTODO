import { useEffect, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSelectFilter from "./components/TodoSelectFilter";
import TodoFooter from "./components/TodoFooter";
import "./App.css";

function App() {
    const [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem("todoList")) || []
    );
    const [lightMode, setLightMode] = useState(
        JSON.parse(localStorage.getItem("themeAndFilter"))?.lightMode ?? true
    );
    const [filter, setFilter] = useState(
        JSON.parse(localStorage.getItem("themeAndFilter"))?.filter || "all"
    );

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    useEffect(() => {
        localStorage.setItem(
            "themeAndFilter",
            JSON.stringify({ lightMode, filter })
        );
        if (!lightMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [lightMode, filter]);

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

    const isMobile = window.innerWidth <= 768;

    return (
        <>
            <TodoHeader lightMode={lightMode} onToggle={setLightMode} />
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
            {isMobile && (
                <TodoSelectFilter filter={filter} onFilterToggle={setFilter} />
            )}
            <TodoFooter />
        </>
    );
}

export default App;
