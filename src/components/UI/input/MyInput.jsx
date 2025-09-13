import cl from "./MyInput.module.css";

const MyInput = () => {
    return (
        <input
            className={cl.MyInput}
            type="text"
            placeholder="Write a task..."
        />
    );
};

export default MyInput;
