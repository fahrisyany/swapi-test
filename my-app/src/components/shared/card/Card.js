

import React from "react";
import { Card } from 'react-bootstrap';
import "./Card.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const CardCustom = (props) => {
    const { results, handleOnClick } = props
    return (
        results.map((data, i) => (
            <Card style={{ width: '16rem' }} key={i}>
                <Card.Body>
                    <Card.Title>{data.name ? data.name : data.title}</Card.Title>
                    <Card.Text>
                    {data.name && <span> Birth Year :</span>} {data.name ? data.birth_year : null}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    {!data.title && <Link to={`/people/${data.url.slice(data.url.length - 2)[0]}`}>See Detail</Link>}
                </Card.Body>
            </Card>
        ))
    );
}

export default CardCustom;
