import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import useFetch from '../../useFetch';
import CardMovie from '../CardMovie/CardMovie';
import "./ListMovie.css";

const ListMovie = () => {
    const [newMovie, setNewMovie] = useState([]);
    const [page, setPage]= useState(1);
    const listMovie = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=e9e9d8da18ae29fc430845952232787c&page=${page}`);
    const allMovie = listMovie.results;
    useEffect(() => {
        if(allMovie){
            //Kiểm tra độ trễ của api
            setNewMovie([...newMovie,...allMovie]);
        }
    },[allMovie]); //Khi có giá trị trả về thì dependency mới chạy
    const handleShowMore = () => {
        setPage(page + 1);
    }
    console.log(listMovie);
    return <div>
        <Container>
            <div className="headline">
                <h3>ONLINE STREAMING</h3>
                <h2>List Movie</h2>
            </div>
            <Row>
                {newMovie &&
                    newMovie.map((item) => (
                        <Col lg={3} md={6}>
                            <CardMovie key={item.id} id={item.id} poster_path={item.poster_path} title={item.title} release_date={item.release_date} vote_average={item.vote_average}></CardMovie>
                        </Col>
                ))}
            </Row>
            <div className="showMovie">
                <Button className="showMore" onClick={handleShowMore}>
                    <i className="fa-solid fa-play"></i>Show More
                </Button>
            </div>
        </Container>
    </div>;
};

export default ListMovie;