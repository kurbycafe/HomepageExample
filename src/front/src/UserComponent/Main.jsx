///create main page for painter
import React from 'react';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <Container>
            <h1>Welcome to React App</h1>
            <p>
                <Link to="/painter">Painter</Link>
            </p>
        </Container>
    );

}

export default Main;