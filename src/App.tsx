import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Place from "./Pages/Place/Place";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="place" element={<Place />} />
      </Routes>
    </Fragment>
  );
};

export default App;
