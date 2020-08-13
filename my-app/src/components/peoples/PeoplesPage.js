import React, { useEffect, useState } from 'react';
// import StarRatings from 'react-star-ratings';
import CardCustom from "../shared/card/Card"
import axios from 'axios';

export default function PeoplesPage() {
    const [state, setstate] = useState({
        results: null,
        loading: false,
    })
    useEffect(() => {
        handleAPiCall('people/')
    }, []);

    const handleAPiCall = (str) => {
        setstate({ loading: true });
        axios({
            method: 'GET',
            url: `https://swapi.dev/api/${str}`
        }).then((res) => {
            console.log("App -> res", res)
            setstate({ loading: false, results: res.data.results })
        })
    }


    return <div>

        <div className="card-container">
            {state.loading === false && state.results && <CardCustom results={state.results} />}
        </div>
    </div>;
}