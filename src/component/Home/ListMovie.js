import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardMovie from "../CardMovie/CardMovie";
import useFetch from "../../useFetch";
const ListMovie = (props) => { 
    const listMovie = useFetch(props.apiLink);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className="list-movie">
            <Container>
                <div className="headline">
                    <h3>ONLINE STREAMING</h3>
                    <h2>{props.title}</h2>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {listMovie.results &&
                            listMovie.results.map((item) => <CardMovie key={item.id} id={item.id} poster_path={item.poster_path} title={item.title} release_date={item.release_date} vote_average={item.vote_average}></CardMovie>)}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default ListMovie;
