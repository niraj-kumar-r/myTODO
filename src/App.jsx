import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoListFilter from "./components/TodoListFilter";
import TodoFooter from "./components/TodoFooter";
import "./App.css";

function App() {
    // const [todoList, setTodoList] = useState([]);
    const [lightMode, setLightMode] = useState(true);

    const handleThemeToggle = () => {
        setLightMode(!lightMode);
        if (lightMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    };

    return (
        <>
            <TodoHeader lightMode={lightMode} onToggle={handleThemeToggle} />
            <TodoForm />
            <TodoList />
            <TodoListFilter />
            <TodoFooter />
        </>
    );
}

export default App;
