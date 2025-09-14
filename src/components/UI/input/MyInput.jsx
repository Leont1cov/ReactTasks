import cl from "./MyInput.module.css";

const MyInput = ({ onChange, ...props }) => {
    return <input onChange={onChange} className={cl.MyInput} {...props} />;
};

export default MyInput;
