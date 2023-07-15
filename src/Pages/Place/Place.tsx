import { Fragment } from "react";
import "./Place.css";
const Place = () => {
  return (
    <Fragment>
      <div className="Place">
        <p className="Place__center">Où souhaites-tu manger? 🍽️</p>
        <div className="Place__buttonBox Place__center">
          <button className="Place__button">
            <img
              className="Place__icon"
              src="public/icons/place-emporter.png"
              alt="emporter"
            />
            <p className="Place__center">emporter</p>
          </button>

          <button className="Place__button">
            <img
              className="Place__icon"
              src="public/icons/place-surPlace.png"
              alt="sur_place"
            />
            <p className="Place__center">Sur place</p>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Place;
