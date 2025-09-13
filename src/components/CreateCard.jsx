import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const CreateCard = () => {
    return (
        <div style={{ display: "flex", gap: 10 }}>
            <MyInput placeholder="Write a task..." />
            <MyButton>Add</MyButton>
        </div>
    );
};

export default CreateCard;
