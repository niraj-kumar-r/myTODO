import { useEffect, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoListFilter from "./components/TodoListFilter";
import TodoFooter from "./components/TodoFooter";
import "./App.css";

function App() {
    const [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem("todoList")) || []
    );
    const [lightMode, setLightMode] = useState(true);

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
        setTodoList([...todoList, { text, completed: false }]);
    };

    return (
        <>
            <TodoHeader lightMode={lightMode} onToggle={handleThemeToggle} />
            <TodoForm onSubmit={handleAddTodo} />
            <TodoList todoList={todoList} />
            <TodoListFilter />
            <TodoFooter />
        </>
    );
}

export default App;
