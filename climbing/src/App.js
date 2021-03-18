import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Climbers from "./components/climbers/Climbers";
import CharactersGrid from "./components/breakingBad/CharactersGrid";
import ClimberModal from "./components/climbers/ClimberModal";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //initializes materialize js
    M.AutoInit();
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  return (
    <Fragment>
      <SearchBar />
      <Climbers />
      <CharactersGrid items={items} isLoading={isLoading} />
    </Fragment>
  );
};

export default App;
