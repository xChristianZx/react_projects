import React from "react";
import { Container, List } from "semantic-ui-react";

const IngredientList = props => {
  const list = props.items.map((item, i) => {
    return <li key={i}>{item}</li>;
  });
  return (
    // <Container text>
      <div className="ingredients-list-container">
        <ul>{list}</ul>
      </div>
    // </Container>
  );
};

export default IngredientList;
