import React from "react";

const IngredientList = props => {
  const list = props.items.map((item, i) => {
    return <li key={i}>{item}</li>;
  });
  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default IngredientList;
