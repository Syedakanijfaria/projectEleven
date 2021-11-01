import React from "react";
import Banner from "../Banner/Banner.js";
import TourPlans from "../TourPlans/TourPlans.js";
import Client from "./Client/Client.js";
import Trust from "./Trust/Trust.js";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <TourPlans></TourPlans>
            <Client></Client>
            <Trust></Trust>
        </div>
    );
};
export default Home;