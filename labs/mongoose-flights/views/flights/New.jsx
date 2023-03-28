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

        <form action="/flights" method="POST">
          <div>
              <select name="airline">
                <option selected>Select an Airline: </option>
                <option value="American">American</option>
                <option value="Southwest">Southwest</option>
                <option value="United">United</option>
              </select>
           
          </div>
     
          <div>
              <select name="destination">
                <option selected>Select a Destination: </option>
                <option value="AUS">AUS</option>
                <option value="DAL">DAL</option>
                <option value="LAX">LAX</option>
                <option value="SAN">SAN</option>
                <option value="SEA">SEA</option>
              </select>
           
          </div>
    
          <div>
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

          <div>
           
              <input
                id="flightNo"
                name="flightNo"
                value={flightNo}
              ></input>
              <label for="flightNo">Flight Number: </label>
            
          </div>

          <div>
              <input
                type="text"
                id="departs"
                name="departs"
                value={`${departsDate.slice(0,10)} ${departsDate.slice(11,16)}`}
              ></input>
              <label for="departs">Departure: </label>
          </div>
         
          <br />
         
            <button type="submit">
              Submit
            </button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default New;

//  I want to create flights by entering the information on a page (new view) that has a form and submitting it