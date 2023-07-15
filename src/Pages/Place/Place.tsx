import { Fragment } from "react";
import "./Place.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
const Place = () => {
  return (
    <Fragment>
      <div className="Place">
        <Header />
        <div className="Place__main">
          <p className="Place__center Place__padding">
            Où souhaites-tu manger? 🍽️
          </p>
          <div className="Place__buttonBox Place__center Place__padding">
            <Link to="/store">
              <button className="Place__button Place__padding">
                <img
                  className="Place__icon"
                  src="public/icons/place-emporter.png"
                  alt="emporter"
                />
                <p className="Place__center">emporter</p>
              </button>
            </Link>
            <Link to="/store">
              <button className="Place__button Place__padding">
                <img
                  className="Place__icon"
                  src="public/icons/place-surPlace.png"
                  alt="sur_place"
                />
                <p className="Place__center">Sur place</p>
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Place;
