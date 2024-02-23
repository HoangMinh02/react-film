import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./DetailMovie.css";
import { Col, Container, Modal, Row } from 'react-bootstrap';
import useFetch from '../../useFetch';

const DetailMovie = () => {
    const { slug: id } = useParams();
    const detailMovie = useFetch(` https://api.themoviedb.org/3/movie/${id}?api_key=e9e9d8da18ae29fc430845952232787c`);
    console.log(detailMovie);
    const trailerMovie = useFetch(` https://api.themoviedb.org/3/movie/${id}/videos?api_key=e9e9d8da18ae29fc430845952232787c `);
    const [show, setShow] = useState(false);
    const [trailer, setTrailer] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        const youtubeKey = trailerMovie.results.filter((item) => item.type === "Trailer");
        setTrailer(youtubeKey[0].key);
    };
    return (
        <div className="detail mb-5">
            <Container>
                <Row>
                    <Col lg={3}>
                        <img src={`https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`} alt="황야" />
                    </Col>
                    <Col lg={9}>
                        <h1>{detailMovie.original_title}</h1>
                        <div className="yearPro d-flex align-items-center gap-2">
                            <p className="year mb-0">{detailMovie.release_date}</p>
                            <p className="kind">{detailMovie.genres && detailMovie.genres.map((item) => item.name).join(",")}</p>
                            <p className="time mb-0">
                                <i className="fa-regular fa-clock"></i> {detailMovie.runtime} min
                            </p>
                        </div>
                        <div class="rate d-flex align-items-center">
                            <p class="number-rate">6.764%</p>
                            <p class="user">user score</p>
                            <p class="playtrailer" onClick={handleShow}>
                                <i class="fa-solid fa-play"></i> Play trailer
                            </p>
                        </div>
                        <h3>Can You Bury Your Past?</h3>
                        <h2>Overview</h2>
                        <p class="overview">{detailMovie.overview}</p>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Trailer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe 
                        width="100%" 
                        height="315" 
                        src={`https://www.youtube.com/embed/${trailer}?&autoplay=1`}
                        title="Youtube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
};

export default DetailMovie;