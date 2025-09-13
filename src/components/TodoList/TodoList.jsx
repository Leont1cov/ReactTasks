import TodoCard from "../TodoCard/TodoCard";
import cl from "../TodoList/TodoList.module.css";

const TodoList = ({ cards }) => {
    return (
        <div className={cl.list}>
            {cards.map((element) => {
                return <TodoCard key={element.id} card={element.title} />;
            })}
        </div>
    );
};

export default TodoList;
