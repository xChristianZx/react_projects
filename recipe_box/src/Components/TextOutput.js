import React from "react";
import { Accordion, List } from "semantic-ui-react";
import InputForm from "./InputForm";

const TextOutput = props => {
  if (!props.recipeList) {
    return;
  }

  const panels = props.recipeList.map((panel, i) => {
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

  const addRecipeButton = {
    title: {
      content: (
        <span className='accordion-title'>
          Click the button to add a recipe{" "}
          <InputForm
            recipe={props.recipe}
            ingredient={props.ingredient}
            handleChange={props.handleChange}
            handleSubmit={props.handleSubmit}
            handleIngredientChange={props.handleIngredientChange}
            handleIngredientSubmit={props.handleIngredientSubmit}
            deleteItem={props.deleteItem}
          />
        </span>
      ),
      key: `title-${panels.length + 1}`
    }
  };

  return (
    <div className="output-container">
      <Accordion
        defaultActiveIndex={0}
        panels={panels.concat(addRecipeButton)}
        styled
      />
    </div>
  );
};

export default TextOutput;
