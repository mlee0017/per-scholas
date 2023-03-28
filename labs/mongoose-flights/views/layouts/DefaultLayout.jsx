import React from "react";

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>Flights</title>
        <link rel="stylesheet" href="../../public/css/styles.css" />
      </head>
      <body>  
        <nav>
              <ul>
                <li class="nav-item">
                  <a href="/flights">
                  All Flights
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/flights/New">
                  Add Flight
                  </a>
                </li>  
              </ul>
        </nav>
        <div>
          {props.children}
        </div>
      </body>
    </html>
  );
}

export default DefaultLayout;