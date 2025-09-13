import { useState } from "react";
import cl from "./MyInput.module.css";

const MyInput = (props, value) => {
    const [text, setText] = useState("");

    return (
        <input
            value={value}
            onChange={(e) => setText(e.target.value)}
            className={cl.MyInput}
            {...props}
        />
    );
};

export default MyInput;
