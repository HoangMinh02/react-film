import React from "react";
import Banner from "./Banner";
import ListMovie from "./ListMovie";

const Home = () => {
    const arrMovie = [
        {
            title: "Now Playing Movie",
            apiLink: "https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&page=1"
        },
        {
            title: "Upcoming Movie",
            apiLink: "https://api.themoviedb.org/3/movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&page=1"
        },
        {
            title: "Top Rated Movie",
            apiLink: "https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&page=1"
        },
    ]
    return (
        <div>
            <Banner></Banner>
            {arrMovie.map((item)=>(
                <ListMovie key={item.id} title={item.title} apiLink={item.apiLink}></ListMovie>
            ))} 
        </div>
    );
};

export default Home;
