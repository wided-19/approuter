import React from 'react';
import { Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import movies from "../Data"
import YouTube from 'react-youtube'

const TrailerMovie = (props) => {

    const movieId = Number(props.match.params.id);

    const movie = movies.filter(movie => {
        if (movie.id === movieId) {
            return movie;
        }
        return false;
    });

    return (
       
        <div style = {{ backgroundColor:"rgb(221, 118, 118)",textAlign: 'center', minHeight: '100vh',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
            
            
            <h1 style={{textTransform: "uppercase",color:" Black",fontSize:"50px"}}>{movie[0].name}</h1>
            <YouTube videoId={movie[0].Trailer}/>
            <h6 style={{ justifyContent:"center",color:"black" ,fontSize:"30px"}}>{movie[0].description}</h6>
            <Link to="/" style={{backgroundColor:"black", fontSize:"40 px"}}> Home Page</Link>
        </div>
        );

}

export default  TrailerMovie ;