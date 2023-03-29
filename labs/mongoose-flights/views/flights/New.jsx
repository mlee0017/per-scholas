import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function New({departsDate}) {
  let today = new Date(); 
  let currentDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    today.getHours()-7,
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
              <select name="airport">
                <option selected>Select a Destination: </option>
                <option value="AUS">AUS</option>
                <option value="DAL">DAL</option>
                <option value="LAX">LAX</option>
                <option value="SAN">SAN</option>
                <option value="SEA">SEA</option>
              </select>
           
          </div>
    
          <div>
              <label for="flight-time">
                Choose a date & time for your flight:
              </label>
              <input
                type="datetime-local"
                id="flight-time"
                name="flight-time"
                value={currentDate.toISOString().slice(0, 16)}
              ></input>
   
       
          </div>

          <div>
           
            <label for="flightNo">Flight Number: </label>
              <input
                id="flightNo"
                name="flightNo"
                value={flightNo}
              ></input>
            
          </div>

          <div>
            <label for="departure">Departure: </label>
              <input
                type="text"
                id="departure"
                name="departure"
                value={`${departsDate.slice(0,10)} ${departsDate.slice(11,16)}`}
              ></input>
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