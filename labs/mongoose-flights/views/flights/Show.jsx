import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {
  console.log(props.flight.destinations);
  let today = new Date(); 

  let currentDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    today.getHours() - 4,
    today.getMinutes(),
    today.getSeconds()
  );
  currentDate = currentDate.toISOString().slice(0, 16);
  console.log(currentDate);

  console.error("Error: date not found");
  const usedAirports = props.flight.destinations.map(
    (destination) => destination.airport
  );
  const availableAirports = ["AUS", "DAL", "LAX", "SAN", "SEA"].filter(
    (airport) => !usedAirports.includes(airport)
  );

  return (
    <DefaultLayout>
      <div >
        <h1>Airline: {props.flight.airline}</h1>
        <h1>Flight Number: {props.flight.flightNo}</h1>
        <h1>Departs: {props.flight?.departs?.toString()}</h1>

        <ul>
          {props.flight.destinations.map((destination) => (
            <>
            
              <form
                action={`/flights/${props.flight._id}/destinations/${destination._id}?_method=DELETE`}
                method="POST"
              >
                <input type="submit" value="required"/>
              </form>

              <li key={destination._id} style={{ listStyle: "none" }}>
                <p>Airport: {destination.airport}</p>
                <p>Arrival: {destination?.arrival?.toString()}</p>
              </li>
              
            </>
          ))}
        </ul>

        <br />
        <br />

        <details>
          <summary>Destinations:</summary>
          <form
            action={`/flights/${props.flight._id}/destinations`}
            method="POST"
          >


                <select name="airport">
                  <option selected>Select a Destination</option>
                  {availableAirports.map((airport) => (
                    <option value={airport}>{airport}</option>
                  ))}
                </select>

                <label for="arrival">Choose a date/time for your flight:</label>
                <input
                  type="datetime-local"
                  id="arrival"
                  name="arrival"
                  value={currentDate}
                ></input>

                <br />

            <button>Add Destination</button>
          </form>
        </details>

        <br />

         
          <form action={`/flights/${props.flight._id}/edit`}>
            <button>Edit</button>
          </form>
         
          <form
            action={`/flights/${props.flight._id}?_method=DELETE`}
            method="DELETE"
          >
            <button>Delete</button>
          </form>
        
          <form action="/flights">
            <button>Back</button>
          </form>
    
      </div>
    </DefaultLayout>
  );
}

export default Show;