import cl from "./MyButton.module.css";

const MyButton = ({ children, props, onClick }) => {
    return (
        <button onClick={onClick} className={cl.MyButton} {...props}>
            {children}
        </button>
    );
};

export default MyButton;
