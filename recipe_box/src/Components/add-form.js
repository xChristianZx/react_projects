import React, { Component } from "react";
import { Container, Header, Form, Button, Input } from "semantic-ui-react";

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
      <Form.Field width={8}>
        <label>Ingredients</label>
        <Form.Input
          name="ingredients"
          onChange={props.handleChange}
          value={props.recipes.ingredients}
          type="text"
          placeholder="eggs, bacon, hashbrowns..."
        />
      </Form.Field>
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
