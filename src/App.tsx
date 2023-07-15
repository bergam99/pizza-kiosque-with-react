import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Place from "./Pages/Place/Place";
import "./App.css";
import Store from "./Pages/Store/Store";
import Resume from "./Pages/Resume/Resume";
import NotFound from "./Pages/NotFound/NotFound";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="place" element={<Place />} />
        <Route path="store" element={<Store />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default App;
