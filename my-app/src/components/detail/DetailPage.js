import React, { useEffect, useState } from 'react';
// import StarRatings from 'react-star-ratings';
import CardCustom from "../shared/card/Card"
import axios from 'axios';

export default function DetailPage(props) {

    const [state, setstate] = useState({
        results: null,
        loading: false,
    })
    useEffect(() => {
        handleAPiCall(`people/${props.match.params.id}`)
    }, []);

    const handleAPiCall = (str) => {
        setstate({ loading: true });
        axios({
            method: 'GET',
            url: `https://swapi.dev/api/${str}`
        }).then((res) => {
            console.log("App -> res", res.data)
            setstate({ loading: false, results: res.data })
        })
    }

    return <div>
        <h2>
            Character Detail
        </h2>
        {
            state.results && <div>

                <div>Name : {state.results.name}</div>
                <div>birth_year : {state.results.name}</div>
                <div>eye_color : {state.results.eye_color}</div>
                <div>skin_color : {state.results.skin_color}</div>
                <div>height : {state.results.height}</div>
            </div>
        }
    </div>;
}