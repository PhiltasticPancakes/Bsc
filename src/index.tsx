import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Editor } from "./Editor/Editor";

const root = document.getElementById("root");
render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <App/> }/>
        <Route path="/editor" element={ <Editor/> }/>
    </Routes>
    </BrowserRouter>




    , root);