import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <Fragment>
      <Link to="/place">
        <img className="Home__img" src="public/imgs/home.png" alt="home-img" />
      </Link>
    </Fragment>
  );
};

export default Home;
