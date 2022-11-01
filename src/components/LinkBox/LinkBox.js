import React from "react";
import "./LinkBox.css";

const LinkBox = ({ idName, Link, Text }) => {
  return (
    <div className="link-box">
      <a href={Link} target="_blank" rel="noreferrer" id={idName}>
        {Text}
      </a>
    </div>
  );
};

export default LinkBox;
