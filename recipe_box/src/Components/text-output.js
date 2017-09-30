import React from "react";
import { Container } from "semantic-ui-react";

const TextOutput = ({ recipeList }) => {
  if (!recipeList) {
    return;
  }
  console.log(recipeList);
  const textArray = recipeList.map((text) => {
    return (
      <div key={text.id}>
        <p>{text.recipe.title}</p>
      </div>
    );
  });

  return (
    <Container>
      <div>{textArray}</div>
    </Container>
  );
};

export default TextOutput;
