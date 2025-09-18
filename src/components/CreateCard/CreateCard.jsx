import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import cl from "./CreateCard.module.css";

const CreateCard = ({ onClick, onChange, clearList }) => {
    return (
        <div className={cl.CreateCard}>
            <MyInput onChange={onChange} placeholder="Write a task..." />
            <MyButton onClick={onClick}>Add</MyButton>
            <MyButton onClick={clearList}>Clear</MyButton>
        </div>
    );
};

export default CreateCard;
