import React from "react";
import "./style.css";
//The value of the header is coming from the text inside of the Title.
function Title(props) {
  return <h1 className="header">{props.children}</h1>;
}

export default Title;