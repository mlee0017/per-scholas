import React from "react";

function Index(props) {
    return (
        <div>
            <h1>Index</h1>
            <ul>
              {props.places.map((place, index) => 
                <li key={index}>
                  <a href={`/${index}`}>
                    <strong>${place.city}</strong>
                  </a>
                </li>
                )
            }
            </ul>
        </div>
    )
}

export default Index; 
