import { useState } from "react";
import "./TodoCard.css";

const TodoCard = ({ card }) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className={checked ? "card card-done" : "card"}>
            <input onClick={() => setChecked(!checked)} type="checkbox" />
            <span className={checked ? "card-checked" : ""}>{card}</span>
        </div>
    );
};

export default TodoCard;
