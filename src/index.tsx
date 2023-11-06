import React from "react";
import { render } from "react-dom";
import {ClientComponent} from "./GameClient";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Editor } from "./Editor/Editor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css';
import { Home } from "./home";

const root = document.getElementById("root");
render(
    <DndProvider backend={HTML5Backend}>
    <BrowserRouter>
        
    <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/play" element={ <ClientComponent/> }/>
        <Route path="/edit" element={ <Editor/> }/>
    </Routes>

    </BrowserRouter>
    
    </DndProvider>




    , root);