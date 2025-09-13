import { useState } from "react";
import "./App.css";
import MyInput from "./components/UI/input/MyInput";

function App() {
    return (
        <>
            <MyInput placeholder="Write a task..." />
            <h1>To-do list</h1>
        </>
    );
}

export default App;
