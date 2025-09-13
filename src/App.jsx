import { useState } from "react";
import "./App.css";
import CreateCard from "./components/CreateCard";
import TodoCard from "./components/TodoCard/TodoCard";

function App() {
    return (
        <>
            <CreateCard />
            <h1>To-do list</h1>
            <TodoCard>Task</TodoCard>
        </>
    );
}

export default App;
