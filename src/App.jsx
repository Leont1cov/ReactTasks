import { useState } from "react";
import "./App.css";
import CreateCard from "./components/CreateCard";

function App() {
    return (
        <>
            <CreateCard />
            <h1>To-do list</h1>
        </>
    );
}

export default App;
