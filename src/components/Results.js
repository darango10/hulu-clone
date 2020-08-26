import React, {useEffect, useState} from 'react';
import '../css/results.css'
import Videocard from "./Videocard";
import axios from '../axios'
import requests from "../requests";
import FlipMove from "react-flip-move";

const Results = ({selectedOption}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [selectedOption]);


    return (
        <div className='results'>
            <FlipMove>
                {movies.map(movie => (
                    <Videocard movie={movie} key={movie.id}/>
                ))}
            </FlipMove>

        </div>
    );
};

export default Results;
