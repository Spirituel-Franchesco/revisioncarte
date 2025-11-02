import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Countries from "../components/Countries";

const About = () => {
    return (
        <div className="page">
            <Logo />
            <Navigation />
            <Countries />
        </div>
    );
};

export default About;