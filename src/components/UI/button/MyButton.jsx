import cl from "./MyButton.module.css";
import clsx from "clsx";

const MyButton = ({ children, onClick, className, props }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(cl.MyButton, className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default MyButton;
