import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardMovie from "../CardMovie/CardMovie";
import useFetch from "../../useFetch";
import "./ListMovie.css";
const ListMovie = (props) => { 
    const listMovie = useFetch(props.apiLink);
    useEffect(() => {
        const handleResize = () => {
            // Cập nhật số lượng slidesToShow và slidesToScroll dựa trên kích thước màn hình
            let slidesToShow = 6;
            let slidesToScroll = 3;
            if (window.innerWidth <= 768) {
                slidesToShow = 3;
                slidesToScroll = 2;
            }
            if (window.innerWidth <= 576) {
                slidesToShow = 2;
                slidesToScroll = 1;
            }
            setSettings({
                ...settings,
                slidesToShow,
                slidesToScroll,
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Gọi hàm một lần để cài đặt ban đầu

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array ensures that effect runs only once on mount

    const [settings, setSettings] = useState({
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
    });
    return (
        <div className="list-movie">
            <Container className="my-3">
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
