import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css';
import { EditorPage } from "./Pages/EditorPage";
import { PlayPage } from "./Pages/PlayPage";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";

const root = document.getElementById("root");
render(
    <StrictMode>

        <DndProvider backend={HTML5Backend}>
            <BrowserRouter>
                <div className="page-wrapper">

                    <header>
                        <Button size="large" component={Link} to={'/'} variant="outlined"> <Typography>Home</Typography> </Button>
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/play" element={<PlayPage />} />
                            <Route path="/edit" element={<EditorPage />} />
                        </Routes>
                    </main>

                </div>
            </BrowserRouter>
        </DndProvider>

    </StrictMode>
    , root);