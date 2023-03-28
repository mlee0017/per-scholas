import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function New({departsDate}) {
  let currentDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    today.getHours()-4,
    today.getMinutes(),
    today.getSeconds()
  );

  const flightNo = Math.floor(Math.random() * 9999) + 10;

  return (
    <DefaultLayout>
      <div>
        <h1>Flights</h1>
        <br />
        <br />
        <br />

        <form action="/flights" method="POST">
          <div class="input-group">
              <select
                style={{ width: "30vw" }}
                name="airline"
              >
                <option selected>Select an Airline: </option>
                <option value="American">American</option>
                <option value="Southwest">Southwest</option>
                <option value="United">United</option>
                <option value="Frontier">Frontier</option>
                <option value="Spirit">Spirit</option>
                <option value="JetBlue">JetBlue</option>
                <option value="Delta">Delta</option>
              </select>
           
          </div>
     
          <div class="input-group">
              <select
                style={{ width: "30vw" }}
                name="destination"
              >
                <option selected>Select a Destination: </option>
                <option value="AUS">AUS</option>
                <option value="DAL">DAL</option>
                <option value="LAX">LAX</option>
                <option value="SAN">SAN</option>
                <option value="SEA">SEA</option>
              </select>
           
          </div>
    
          <div class="input-group">
              <input
                type="datetime-local"
                id="flight-time"
                name="flight-time"
                value={currentDate.toISOString().slice(0, 16)}
              ></input>
              <label for="flight-time">
                Choose a date & time for your flight:
              </label>
   
       
          </div>

          <div class="input-group">
           
              <input
                id="flightNo"
                style={{ width: "30vw" }}
                name="flightNo"
                value={flightNo}
              ></input>
              <label for="flightNo">Flight Number: </label>
            
          </div>

          <div class="input-group">
              <input
                type="text"
                id="departs"
                name="departs"
                value={`${departsDate.slice(0,10)} ${departsDate.slice(11,16)}`}
                style={{ width: "30vw" }}
              ></input>
              <label for="departs">Departure: </label>
          </div>
         
          <br />
         
            <button type="submit" class="btn btn-outline-primary">
              Submit
            </button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default New;