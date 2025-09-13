import "./TodoCard.css";

const TodoCard = ({ card }) => {
    return (
        <div className="card">
            <input type="checkbox" />
            {card}
        </div>
    );
};

export default TodoCard;
