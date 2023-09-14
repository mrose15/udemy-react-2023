import React from "react";

const Card = (props) => {
  return <ul className={props.classname}>{props.children}</ul>;
};

export default Card;
