import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [movie, setMovie] = useState([]);
    const fetchMovie = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    };
    useEffect(() => {
        fetchMovie();
    }, [url]);
    return movie;
};

export default useFetch;