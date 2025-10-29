import React, { useState, useEffect } from "react";
import axios from "axios";

const Countries = () => {

    const [pays, setPays] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v2/all?fields=name,capital,population,flag")
            .then((res) => setPays(res.data))
            .catch((err) => console.log(err));
    }, []);

    console.log(pays);

    return (
        <div className="logo">
        <h1>Countries</h1>
        </div>
    );
};

export default Countries;