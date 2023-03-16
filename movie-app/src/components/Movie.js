import React from "react";
import './Movie.css'

export default function Movie(props){
return (
    <div className="singleMovie">
        <h1>{props.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original${props.imageLink}`} />
        <p>{props.overview}</p>
    </div>
)
}