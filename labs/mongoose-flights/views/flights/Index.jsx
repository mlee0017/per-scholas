import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Index(props) {
  return (
    <DefaultLayout>
      <div>
          <h1>Flight</h1>
          <a href="/flights/new">
            <button className="btn">Add...</button>
          </a>
          <form action="/flights/clear?_method=DELETE" method="DELETE">
            <button className="btn">CLEAR</button>
          </form>
          
          {props && props.flights.map((flight, index) => (
            <div key={index}> 
                <a href={`/flights/${flight._id}`}>
                    <h2>{flight.airline}</h2>
                </a>
                <br />
                <h2>Flight Number: {flight.flightNo}</h2>
                <br />
                <h2>{flight.departs.toString()}</h2>
            </div>
          ))}
        </div>
    </DefaultLayout>
  );
}

export default Index;

//  I want to view a list of all flights (index view) that displays each flight's airline, flight no., and departure date/time