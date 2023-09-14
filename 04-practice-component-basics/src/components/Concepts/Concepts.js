import React from "react";

import Concept from "../Concepts/Concept";
import Card from "../UI/Card";
import "./Concepts.css";

const Concepts = (props) => {
  return (
    <Card classname="concepts">
      <Concept
        image={props.concepts[0].image}
        title={props.concepts[0].title}
        description={props.concepts[0].description}
      ></Concept>
      <Concept
        image={props.concepts[1].image}
        title={props.concepts[1].title}
        description={props.concepts[1].description}
      ></Concept>
      <Concept
        image={props.concepts[2].image}
        title={props.concepts[2].title}
        description={props.concepts[2].description}
      ></Concept>
    </Card>
  );
};

export default Concepts;
