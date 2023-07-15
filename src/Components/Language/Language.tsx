import { useState } from "react";

const Language = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="Language">
      <button className="Language__toggle" onClick={handleToggle}>
        FR
      </button>

      <div className="lang_wrapper">
        <div className="lang_inner_wrapper">
          <div className={`normal ${isExpanded ? "expanded" : ""}`}>
            {/* <p>EN</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
