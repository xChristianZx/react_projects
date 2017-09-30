import React from "react";
import { Form, Button } from "semantic-ui-react";
import IngredientList from "./add-ingredients.js";

const AddForm = props => {
  return (
    <Form className="form-wrapper" size={"tiny"} onSubmit={props.handleSubmit}>
      <Form.Field width={8}>
        <label>Recipe Name</label>
        <Form.Input
          name="title"
          onChange={props.handleChange}
          value={props.recipes.title}
          placeholder="casserole, tootsieroll, eggrolls..."
          type="text"
        />
      </Form.Field>
      <Form.Group>
        <IngredientList items={props.recipes.ingredients} />
        <Form.Field width={8}>
          <label>Ingredients</label>
          <Form.Input
            name="ingredients"
            onChange={props.handleIngredientsChange}
            value={props.addIngredients}
            type="text"
            placeholder="eggs, bacon, hashbrowns..."
          />
        </Form.Field>
        <Button
          circular
          className="button-ingredients"          
          type="submit"
          size="mini"
        >+</Button>
      </Form.Group>
      <Form.Field width={8}>
        <label>Instructions</label>
        <textarea
          name="instructions"
          onChange={props.handleChange}
          value={props.recipes.instructions}
          type="text"
          rows={3}
        />
      </Form.Field>
      <Button className="button" type="submit" floated="right">
        Add
      </Button>
    </Form>
  );
};

export default AddForm;
