import { useState } from "react";
import "./App.css";
import CreateCard from "./components/CreateCard/CreateCard";
import TodoList from "./components/TodoList/TodoList";
import { cards as initialCards } from "./components/data/cards";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [cards, setCards] = useState(initialCards);
    const [text, setText] = useState("");
    const [filter, setFilter] = useState("all");

    const createTask = () => {
        const newCard = {
            id: Date.now(),
            title: text,
            done: false,
        };
        setCards([...cards, newCard]);
    };

    const deleateTask = (card) => {
        setCards(cards.filter((p) => p.id !== card.id));
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const clearList = () => {
        setCards([]);
    };

    const getFilteredCard = () => {
        if (filter === "done") return cards.filter((e) => e.done);

        if (filter === "active") return cards.filter((e) => !e.done);

        return cards;
    };

    const toggleDone = (card) => {
        setCards(
            cards.map((p) => (p.id == card.id ? { ...p, done: !p.done } : p))
        );
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                    To-do list
                </h1>
                <div style={{ display: "flex", gap: 10, marginBottom: 30 }}>
                    <MyButton onClick={() => setFilter("all")}>All</MyButton>
                    <MyButton onClick={() => setFilter("active")}>
                        Active
                    </MyButton>
                    <MyButton onClick={() => setFilter("done")}>Done</MyButton>
                </div>
                <CreateCard
                    clearList={clearList}
                    onClick={createTask}
                    onChange={handleInputChange}
                />
                <TodoList
                    toggleDone={toggleDone}
                    deleateTask={deleateTask}
                    cards={getFilteredCard()}
                />
            </div>
        </>
    );
}

export default App;
