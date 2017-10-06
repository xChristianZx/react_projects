import React from "react";
import { Form, Button } from "semantic-ui-react";
import IngredientList from "./IngredientList.js";
import AddIngredient from "./AddIngredient.js";

const AddForm = props => {
  return (
    <div>
      <Form
        className="form-wrapper"
        size={"tiny"}
        onSubmit={props.handleSubmit}
      >
        <Form.Field width={8}>
          <label>Recipe Name</label>
          <Form.Input
            name="title"
            onChange={props.handleChange}
            value={props.recipe.title}
            placeholder="casserole, tootsieroll, eggrolls..."
            type="text"
          />
        </Form.Field>
      </Form>

      {/* <IngredientList items={[props.ingredients]} /> */}

      <div className="modal-open-button-wrapper">
        <AddIngredient
          handleIngredientChange={props.handleIngredientChange}
          handleIngredientSubmit={props.handleIngredientSubmit}
          recipe={props.recipe}
          ingredient={props.ingredient}
        />
      </div>

      <Form
        className="form-wrapper"
        size={"tiny"}
        onSubmit={props.handleSubmit}
      >
        <Form.Field width={8}>
          <label>Instructions</label>
          <textarea
            name="instructions"
            onChange={props.handleChange}
            value={props.recipe.instructions}
            type="text"
            rows={3}
          />
        </Form.Field>
        <Button className="button" type="submit" floated="right">
          Add Recipe
        </Button>
      </Form>
    </div>
  );
};

export default AddForm;
