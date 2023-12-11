import React, { StrictMode } from "react";
import { render } from "react-dom";
import { ClientComponent } from "./GameClient";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Editor } from "./Editor/Editor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css';
import { Home } from "./home";
import { EditorPage } from "./Editor/EditorPage";
import { Container } from "@mui/material";

const root = document.getElementById("root");
render(
    <StrictMode>

        <DndProvider backend={HTML5Backend}>
            <BrowserRouter>
                <main>
                    <div className="container">

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/play" element={<ClientComponent />} />
                            <Route path="/edit" element={<EditorPage />} />
                        </Routes>
                    </div>
                </main>

            </BrowserRouter>
        </DndProvider>

    </StrictMode>
    , root);