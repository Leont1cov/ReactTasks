import { useState } from "react";
import "./App.css";
import CreateCard from "./components/CreateCard";
import TodoList from "./components/TodoList/TodoList";
import { cards as initialCards } from "./components/data/cards";

function App() {
    const [cards, setCards] = useState(initialCards);
    const [text, setText] = useState("");

    const createTask = () => {
        const newCard = {
            title: text,
        };
        setCards([...cards, newCard]);
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "center" }}>
                To-do list
            </h1>
            <CreateCard onClick={createTask} onChange={handleInputChange} />
            <TodoList cards={cards} />
        </>
    );
}

export default App;
