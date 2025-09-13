import { useState } from "react";
import "./App.css";
import CreateCard from "./components/CreateCard";
import TodoList from "./components/TodoList/TodoList";
import { cards } from "./components/data/cards";

function App() {
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
