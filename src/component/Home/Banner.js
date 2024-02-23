import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="https://react-film-clone.vercel.app/img/banner_1.png" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://react-film-clone.vercel.app/img/banner_2.png" alt="" />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
