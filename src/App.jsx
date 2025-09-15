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
            id: Date.now(),
            title: text,
        };
        setCards([...cards, newCard]);
    };

    const deleateTask = (card) => {
        setCards(cards.filter((p) => p.id !== card.id));
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
            <TodoList deleateTask={deleateTask} cards={cards} />
        </>
    );
}

export default App;
