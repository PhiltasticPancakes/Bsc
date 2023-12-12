import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css';
import { Home } from "./home";
import { EditorPage } from "./Editor/EditorPage";
import { PlayPage } from "./PlayPage";

const root = document.getElementById("root");
render(
    <StrictMode>

        <DndProvider backend={HTML5Backend}>
            <BrowserRouter>
                <main>
                    <div className="container">

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/play" element={<PlayPage />} />
                            <Route path="/edit" element={<EditorPage />} />
                        </Routes>
                    </div>
                </main>

            </BrowserRouter>
        </DndProvider>

    </StrictMode>
    , root);