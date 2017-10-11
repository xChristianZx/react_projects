import React, { Component } from "react";
import { Container, Header, Modal, Button } from "semantic-ui-react";
import AddForm from "./AddRecipeForm.js";

const InputForm = props => {
  return (
    <div className="form-container-wrapper">
      <Container className="form-container" textAlign="center">
        <Header as="h2" dividing>
          Add Recipe
        </Header>
        <AddForm
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