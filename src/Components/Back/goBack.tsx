import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./goBack.css";
const GoBack: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Fragment>
      <button className="GoBack__button" onClick={goBack}>
        <img
          className="GoBack__icon"
          src="public/icons/back-arrow.png"
          alt="back"
        />{" "}
        <span className="GoBack__text">Retour</span>
      </button>
    </Fragment>
  );
};

export default GoBack;
