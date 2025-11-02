import React from "react";

const Card = (props) => {

    const { pays } = props;

    return (
        <div className="card">
            <img src={pays.flag} alt="Flag" />
            <div className="container">
                <li>{pays.name}</li>
                <li>{pays.capital}</li>
                <li>{pays.population.toLocaleString()}</li>
            </div>
        </div>
    );
};

export default Card;