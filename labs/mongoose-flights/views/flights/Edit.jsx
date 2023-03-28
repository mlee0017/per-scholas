import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Edit(props) {
  return (
    <DefaultLayout>
      <div>
        <h1>Edit flights</h1>
        <form action={`/flights/${props._id}?_method=PUT`} method="POST">
          <label htmlFor="airline">Airline:</label>
          <br />
          <input type="text" id="airline" name="airline" value={props.flights.airline} />
          <br />
      
          <label htmlFor="destination">Destination:</label>
          <input type="text" id="destination" name="destination" value={props.destination} />
          <br />

          <button className="btn">Submit</button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default Edit;