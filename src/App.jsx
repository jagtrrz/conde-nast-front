import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext from "./store/appContext";

import { Home } from "./pages/home"
import { NavBar } from "./components/navBar"

const App = () =>{
    return (
        <div>
            <BrowserRouter basename='/'>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default injectContext(App);