import React from "react";

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>Country : <strong>{props.place.country}</strong></p>
            <p>City :  <strong>{props.place.city}</strong></p>
            
            <img src={props.places.image} alt={props.place.city}/> 
    
            <a href={`/${index}`}>Back</a>


        </div>
    )
}

export default Show; 