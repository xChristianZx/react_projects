import React from "react";
import { Accordion, Modal, List, Button } from "semantic-ui-react";
import InputForm from "./InputForm";

const TextOutput = props => {
  if (!props.recipeList) {
    return;
  }

  const panels = props.recipeList.map((panel, i) => {
    const ingredients = panel.recipe.ingredients;
    const ingredientList = ingredients.map(item => item.ingredient);
    const instructions = panel.recipe.instructions;
    const title = panel.recipe.title;

    // console.log("HERE I AM:", ingredientList);
    return {
      title: {
        content: (
          <span>
            <h3>
              {title}
              <Button
                circular
                size="mini"
                icon="close"
                floated="right"
                onClick={props.deleteRecipe.bind(this, panel.id)}
              />
              <Modal
                trigger={
                  <Button onClick={props.editRecipe.bind(this, panel.id)} circular size="mini" icon="edit" floated="right" />
                }
                basic
                size="small"
              >
                <InputForm
                  recipe={props.recipe}
                  ingredient={props.ingredient}
                  handleChange={props.handleChange}
                  handleSubmit={props.handleSubmit}
                  handleIngredientChange={props.handleIngredientChange}
                  handleIngredientSubmit={props.handleIngredientSubmit}
                  deleteItem={props.deleteItem}
                />
              </Modal>
            </h3>
          </span>
        ),
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

  const addRecipePanel = {
    title: {
      content: (
        <span className="accordion-title">
          Add a recipe{" "}
          <Modal
            trigger={
              <Button
                className="input-form-modal-button"
                icon="add"
                size="mini"
                circular
                floated="right"
              />
            }
            basic
            size="small"
          >
            <InputForm
              recipe={props.recipe}
              ingredient={props.ingredient}
              handleChange={props.handleChange}
              handleSubmit={props.handleSubmit}
              handleIngredientChange={props.handleIngredientChange}
              handleIngredientSubmit={props.handleIngredientSubmit}
              deleteItem={props.deleteItem}
            />
          </Modal>
        </span>
      ),
      key: `title-${panels.length + 1}`
    }
  };

  const fullPanels = panels.concat(addRecipePanel);

  return (
    <div className="output-container">
      <Accordion
        defaultActiveIndex={0}
        panels={fullPanels}
        styled
      />
    </div>
  );
};

export default TextOutput;
