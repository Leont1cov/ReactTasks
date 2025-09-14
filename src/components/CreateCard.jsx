import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { useState } from "react";

const CreateCard = ({ onClick }) => {
    return (
        <div style={{ display: "flex", gap: 10 }}>
            {/* <MyInput props={props} placeholder="Write a task..." /> */}
            <MyButton onClick={onClick}>Add</MyButton>
        </div>
    );
};

export default CreateCard;
