import { Button, Container, FormControl, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { Editor } from "./Editor";

export const EditorPage = () => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [name, setName] = useState("");
    const [ready, setReady] = useState(false);

    const sizePicker = (
        <div className="centered" style={{ display: 'flex', flexDirection: 'column', height: "100% "}}>
            <FormControl>
                <FormLabel>Enter Height</FormLabel>
                <TextField value={height} onChange={ e => setHeight(Number(e.target.value))}></TextField>

                <FormLabel>Enter Width</FormLabel>
                <TextField value={width} onChange={ e => setWidth(Number(e.target.value))}></TextField>

                <FormLabel>Enter GameName</FormLabel>
                <TextField value={name} onChange={ e => setName(e.target.value)}></TextField>

                <Button type="submit" variant="contained" onClick={() => {setReady(width > 0 && height > 0 && !!name)}}>Create Game</Button>
            </FormControl>


        </div>
    )

    return(
<>
            {(ready)? <Editor rowCount={width} colCount={height} gameName={name}/> : sizePicker}
</>
        );

}