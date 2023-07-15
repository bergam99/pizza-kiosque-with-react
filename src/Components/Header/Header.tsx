import { Fragment } from "react";
import GoBack from "../Back/goBack";
import "./Header.css";
import Language from "../Language/Language";

const Header = () => {
  return (
    <Fragment>
      <div className="Header">
        <div className="Header__align">
          <GoBack />
        </div>
        <h1 className="Header__title">La Peszata</h1>
        <div className="Header__align">
          <Language />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
