import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("results"));

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />

    <title>Martina Kelava Search app</title>
  </head>
  <body>
    <h1>iTunes Search App</h1>

    <div class="search-box">
      <input type="text" id="searchInput" placeholder="Type to search.." />
      <button id="searchButton">Search</button>
    </div>

    <div id="results"></div>
    <div id="root"></div>
  </body>
</html>;
