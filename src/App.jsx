import { useState } from "react";
import "./App.css";
import CreateCard from "./components/CreateCard";
import TodoCard from "./components/TodoCard/TodoCard";
import TodoList from "./components/TodoList/TodoList";

function App() {
    const cards = [
        { id: 1, title: "JavaScript" },
        { id: 2, title: "HTML CSS" },
        { id: 3, title: "C++" },
    ];

    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "center" }}>
                To-do list
            </h1>
            <CreateCard />
            <TodoList cards={cards} />
        </>
    );
}

export default App;
