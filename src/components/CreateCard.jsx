import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const CreateCard = ({ onClick, onChange }) => {
    return (
        <div style={{ display: "flex", gap: 10 }}>
            <MyInput onChange={onChange} placeholder="Write a task..." />
            <MyButton onClick={onClick}>Add</MyButton>
        </div>
    );
};

export default CreateCard;
