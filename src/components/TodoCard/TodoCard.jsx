import "./TodoCard.css";

const TodoCard = ({ children }) => {
    return (
        <div className="card">
            <input type="checkbox" />
            {children}
        </div>
    );
};

export default TodoCard;
