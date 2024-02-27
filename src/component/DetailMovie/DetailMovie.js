import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./DetailMovie.css";
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import useFetch from '../../useFetch';

const DetailMovie = () => {
    const { slug: id } = useParams();
    const detailMovie = useFetch(` https://api.themoviedb.org/3/movie/${id}?api_key=e9e9d8da18ae29fc430845952232787c`);
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
        <div>
            {detailMovie && (
                <Container className="detail">
                    <Row className="detailMovie">
                        <Col className="left">
                            <img src={`https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`} alt="" />
                        </Col>
                        <Col className="right">
                            <h2>{detailMovie.original_title}</h2>
                            <div className="info">
                                <p>{detailMovie.release_date}</p>
                                <p>{detailMovie.genres && detailMovie.genres.map((item) => item.name).join(", ")}</p>
                                <p>
                                    <i class="fa-regular fa-clock"></i> {detailMovie.runtime} min
                                </p>
                            </div>
                            <div className="rate">
                                <h4>{detailMovie.vote_average}%</h4>
                                <p>User score</p>
                                <Button variant="primary" onClick={handleShow}>
                                    <i className="fa-solid fa-play"></i> Play trailer
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Trailer</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <iframe
                                            width="100%"
                                            height="315"
                                            src={`https://www.youtube.com/embed/${trailer}?&autoplay=1`}
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        ></iframe>
                                    </Modal.Body>
                                </Modal>
                            </div>
                            <div className="desc">
                                <h4>Can you bury your past?</h4>
                                <h3>OverView</h3>
                                <p>{detailMovie.overview}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default DetailMovie;