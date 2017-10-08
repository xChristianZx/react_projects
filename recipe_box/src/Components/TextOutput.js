import React from "react";
import { Accordion, List } from "semantic-ui-react";

const TextOutput = ({ recipeList }) => {
  if (!recipeList) {
    return;
  }
  const panels = recipeList.map((panel, i) => {
    const ingredients = panel.recipe.ingredients;
    const ingredientList = ingredients.map(item => item.ingredient);
    const instructions = panel.recipe.instructions;

    console.log("HERE I AM:", ingredientList);
    return {
      title: {
        content: panel.recipe.title,
        key: `title-${i}`
      },
      content: {
        content: (
          <div>
            <List items={ingredientList} bulleted />
            <div>
              <p>{instructions}</p>
            </div>
          </div>
        ),
        key: `content-${i}`
      }
    };
  });

  return (
    <div className="output-container">
      <Accordion defaultActiveIndex={0} panels={panels} styled />
    </div>
  );
};

export default TextOutput;
