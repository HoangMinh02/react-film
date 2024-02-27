import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardMovie = (props) => {
    return (
        <Container className="pe-3">
            <Row>
                <Col>
                    <Link to={`/detail-movie/${props.id}`} className="card-movie pe-3">
                        <div className="thumb">
                            <img src={`https://image.tmdb.org/t/p/w300${props.poster_path}`} alt="" />
                        </div>
                        <h3>{props.title}</h3>
                        <div className="vote">
                            <p>{props.release_date}</p>
                            <p className="voting">
                                <i className="fa-solid fa-star"></i>
                                {props.vote_average}
                            </p>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default CardMovie;