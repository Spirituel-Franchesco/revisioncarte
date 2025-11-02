import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {

    const [pays, setPays] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v2/all?fields=name,capital,population,flag")
            .then((res) => setPays(res.data));
    }, []);

    return (
        <div>
            <div className="sort-container"></div>
            <ul className="countries">
                {pays.map((p) => (
                    <Card pays={p} />
                ))}
            </ul>
    </div>
    );
};

export default Countries;