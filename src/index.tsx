import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Editor } from "./Editor/Editor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';

const root = document.getElementById("root");
render(
    <DndProvider backend={HTML5Backend}>

    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <App/> }/>
        <Route path="/editor" element={ <Editor/> }/>
    </Routes>
    </BrowserRouter>
    </DndProvider>




    , root);