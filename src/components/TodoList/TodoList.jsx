import TodoCard from "../TodoCard/TodoCard";
import cl from "../TodoList/TodoList.module.css";

const TodoList = ({ cards }) => {
    return (
        <div className={cl.list}>
            {cards.map((element, index) => {
                return <TodoCard key={index + 1} card={element.title} />;
            })}
        </div>
    );
};

export default TodoList;
