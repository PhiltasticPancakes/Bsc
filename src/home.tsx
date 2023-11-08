import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Home = () => {
    return (
            <div className="centered">
                <Button size="large" component={Link} to={'/play'} variant="outlined"> <Typography>Play</Typography> </Button>
                <Button size="large" component={Link} to={'/edit'} variant="outlined"> <Typography>Edit</Typography> </Button>
            </div>
    )
}
