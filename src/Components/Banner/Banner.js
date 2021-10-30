import React from "react";
// import { Carousel } from "react-bootstrap";

import banner3 from "../../Image/banner/banner.jpg";
import banner1 from "../../Image/banner/banner1.jpg";
import banner2 from "../../Image/banner/banner2.jpg";


const Banner = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
};

export default Banner;