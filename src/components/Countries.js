import React, { useState, useEffect } from "react";
import axios from "axios";

const Countries = () => {

    const [pays, setPays] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v2/all?fields=name,capital,population,flag")
            .then((res) => setPays(res.data));
    }, []);

    return (
        <div>
            <ul>
                {pays.map((p) => (
                    <li>{p.name}</li>
                ))}
            </ul>
    </div>
    );
};

export default Countries;