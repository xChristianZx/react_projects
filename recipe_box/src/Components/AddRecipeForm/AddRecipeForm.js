import React from "react";
import './AddRecipeForm.css';
import { Form, Button } from "semantic-ui-react";
import AddIngredient from "../AddIngredient/AddIngredient";

const AddForm = props => {
  return (
    <div>
      <Form
        className="form-wrapper"
        size={"tiny"}
        onSubmit={props.handleSubmit}
      >
        <Form.Field width={8}>
          <label className='form-field-label'>Recipe Name</label>
          <Form.Input
            name="title"
            onChange={props.handleChange}
            value={props.recipe.title}
            placeholder="casserole, tootsieroll, eggrolls..."
            type="text"
          />
        </Form.Field>
      </Form>

      <div className="modal-open-button-wrapper">
        <AddIngredient
          handleIngredientChange={props.handleIngredientChange}
          handleIngredientSubmit={props.handleIngredientSubmit}
          deleteItem={props.deleteItem}
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
          <label className='form-field-label'>Instructions</label>
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
