import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const CreateCard = ({ onClick, onChange, clearList }) => {
    return (
        <div style={{ display: "flex", gap: 10 }}>
            <MyInput onChange={onChange} placeholder="Write a task..." />
            <MyButton onClick={onClick}>Add</MyButton>
            <MyButton onClick={clearList}>Clear</MyButton>
        </div>
    );
};

export default CreateCard;
