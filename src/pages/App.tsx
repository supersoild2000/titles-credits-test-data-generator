import React from "react";

import { titlesGenerator } from "../dataGenerators/titlesGenerator";
import { creditsGenerator } from "../dataGenerators/creditsGenerator";
import { saveAsCsv } from "../utils/saveAsCsv";

import "./App.css";

const onClickHandler = async () => {
  const titles = titlesGenerator(100, 200);

  const credits = creditsGenerator(titles, 5);

  await saveAsCsv(titles, "titles.csv");
  await saveAsCsv(credits, "credits.csv");
};

const App = () => (
  <div className="App">
    <h1>titles-credits-test-data-generator</h1>
    <button className="generate-data-button" onClick={onClickHandler}>
      Generate test data
    </button>
  </div>
);

export default App;
