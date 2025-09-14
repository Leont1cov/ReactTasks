import { useState } from "react";
import "./App.css";
import CreateCard from "./components/CreateCard";
import TodoList from "./components/TodoList/TodoList";
import MyInput from "./components/UI/input/MyInput";
// import { cards } from "./components/data/cards";

function App() {
    const [cards, setCards] = useState([
        { title: "JavaScript" },
        { title: "HTML CSS" },
        { title: "C++" },
    ]);
    const [text, setText] = useState("");

    const createTask = () => {
        const newCard = {
            title: text,
        };
        setCards([...cards, newCard]);
        console.log(cards);
    };

    const func = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "center" }}>
                To-do list
            </h1>
            <MyInput onChange={func} placeholder="Write a task..." />
            <CreateCard onClick={createTask} />
            <TodoList cards={cards} />
        </>
    );
}

export default App;
