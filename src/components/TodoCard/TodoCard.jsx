import { useState } from "react";
import "./TodoCard.css";
import MyButton from "../UI/button/MyButton";
import clsx from "clsx";

const TodoCard = ({ card, deleateTask }) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className={clsx("card", { " card-done": checked })}>
            <input onClick={() => setChecked(!checked)} type="checkbox" />
            <span className={checked ? "card-checked" : ""}>{card.title}</span>
            <MyButton
                onClick={() => deleateTask(card)}
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
