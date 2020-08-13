import React from "react";
import Nav from 'react-bootstrap/Nav';
import "./Navigation.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Navigation = (props) => {
    return (
        <Nav
            className='navigation'
        >
            <Nav.Item>
                <Link to="/">Films</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/peoples">People</Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;
