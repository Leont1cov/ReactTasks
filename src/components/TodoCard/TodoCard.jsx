import { useState } from "react";
import "./TodoCard.css";
import MyButton from "../UI/button/MyButton";
import clsx from "clsx";

const TodoCard = ({ card }) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className={clsx("card", { " card-done": checked })}>
            <input onClick={() => setChecked(!checked)} type="checkbox" />
            <span className={checked ? "card-checked" : ""}>{card}</span>
            <MyButton
                className={clsx("card-deleate", {
                    " card-deleate-border": checked,
                })}
            >
                Deleate
            </MyButton>
        </div>
    );
};

export default TodoCard;
