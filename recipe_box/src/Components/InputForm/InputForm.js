import React from "react";
import './InputForm.css';
import { Container, Header } from "semantic-ui-react";
import AddRecipeForm from "../AddRecipeForm/AddRecipeForm";

const InputForm = props => {
  return (
    <div className="form-container-wrapper">
      <Container className="form-container" textAlign="center">
        <Header as="h2" dividing>
          Add Recipe
        </Header>
        <AddRecipeForm
          recipe={props.recipe}
          ingredient={props.ingredient}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
          handleIngredientChange={props.handleIngredientChange}
          handleIngredientSubmit={props.handleIngredientSubmit}
          deleteItem={props.deleteItem}
        />
      </Container>
    </div>
  );
};

export default InputForm;