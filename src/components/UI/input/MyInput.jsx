import { useState } from "react";
import cl from "./MyInput.module.css";

const MyInput = ({ onChange, ...props }) => {
    // const [text, setText] = useState("");
    // console.log(text);

    return <input onChange={onChange} className={cl.MyInput} {...props} />;
};

export default MyInput;
