import React from 'react';
import { Link } from 'react-router-dom';

const CardMovie = (props) => {
    return<Link to={`/detail-movie/${props.id}`} className="card-movie">
    <img src={`https://image.tmdb.org/t/p/w300${props.poster_path}`} alt="" />
    <h3 className="fs-5">{props.title}</h3>
    <p>{props.release_date}</p>
    <p>{props.vote_average}</p>
</Link>
};

export default CardMovie;