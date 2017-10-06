import React from "react";
import { Accordion } from "semantic-ui-react";
// import { Container, Accordion, Icon, Label, List } from "semantic-ui-react";

const TextOutput = ({ recipeList }) => {
  if (!recipeList) {
    return;
  }
//   console.log(recipeList);

  const panels = recipeList.map((panel, i) => {
    return {
      title: {
        content: panel.recipe.title,
        key: `title-${i}`
      },
      content: {
        content: `${panel.recipe.ingredients[i].ingredient}
        ${panel.recipe.instructions}`,
        key: `content-${i}`
      }

      // <List items={panel.recipe.ingredients} bulleted/>
    };
  });

  return (
    <div className="output-container">
      <Accordion defaultActiveIndex={0} panels={panels} styled />
    </div>
  );
};

export default TextOutput;
