import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";
import PropTypes from "prop-types";

export default function TodoHeader({ lightMode, setLightMode }) {
    return (
        <header className="header">
            <h1>TODO</h1>
            <img
                className="toggle-theme-button"
                src={lightMode ? sun : moon}
                onClick={() => setLightMode(!lightMode)}
            />
        </header>
    );
}

TodoHeader.propTypes = {
    lightMode: PropTypes.bool.isRequired,
    setLightMode: PropTypes.func.isRequired,
};
