import React from "react";
import { Container, Header } from "semantic-ui-react";
import AddForm from "./add-form.js";
const InputForm = props => {
  const recipes = props.recipes;

  return (
    <div className="form-container-wrapper">
      <Container className="form-container" textAlign="center">
        <Header as="h2" dividing>
          Add Recipe
        </Header>
        <AddForm
          recipes={recipes}
          ingredients={props.ingredients}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
          handleIngredientsChange={props.handleIngredientsChange}
          handleIngredientSubmit={props.handleIngredientSubmit}
        />
      </Container>
    </div>
  );
};

export default InputForm;
