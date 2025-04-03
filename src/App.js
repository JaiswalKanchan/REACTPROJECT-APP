import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home";
import User from "./Components/ User";

import NavBar from "./Components/Navbar/NavBar";

function App() {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/User" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
