import PropTypes from "prop-types";
import { useState } from "react";

export default function TodoForm({ onSubmit }) {
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(text);
        setText("");
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="todo"
                value={text}
                placeholder="What needs to be done?"
                onChange={handleChange}
            />
        </form>
    );
}

TodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
