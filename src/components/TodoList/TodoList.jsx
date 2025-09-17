import TodoCard from "../TodoCard/TodoCard";
import cl from "../TodoList/TodoList.module.css";

const TodoList = ({ cards, deleateTask, toggleDone }) => {
    return (
        <div className={cl.list}>
            {cards.map((element) => {
                return (
                    <TodoCard
                        toggleDone={toggleDone}
                        deleateTask={deleateTask}
                        key={element.id}
                        card={element}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
