import { useState } from "react";
import "./TodoCard.css";
import MyButton from "../UI/button/MyButton";
import clsx from "clsx";

const TodoCard = ({ card, deleateTask, toggleDone }) => {
    return (
        <div className={clsx("card", { "card-done done": card.done })}>
            <input
                onChange={() => toggleDone(card)}
                checked={card.done}
                type="checkbox"
            />
            <span className={card.done ? "card-checked" : ""}>
                {card.title}
            </span>
            <MyButton
                onClick={() => deleateTask(card)}
                className={clsx("card-deleate", {
                    " card-deleate-border": card.done,
                })}
            >
                Deleate
            </MyButton>
        </div>
    );
};

export default TodoCard;
