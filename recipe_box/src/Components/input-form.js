import React, { Component } from "react";
import { Container, Header, Form, Button, Input } from "semantic-ui-react";

const InputForm = (props) => {
    const recipes = props.recipes;

  return (
    <div className="form-container-wrapper">
      <Container className="form-container" textAlign="center">
        <Header as="h2" dividing>
          Add Recipe
        </Header>
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
              value={recipes.title}
              placeholder="casserole, tootsieroll, eggrolls..."
              type="text"
            />
          </Form.Field>
          <Form.Field width={8}>
            <label>Ingredients</label>
            <Form.Input
              name="ingredients"
              onChange={props.handleChange}
              value={recipes.ingredients}
              type="text"
              placeholder="eggs, bacon, hashbrowns..."
            />
          </Form.Field>
          <Form.Field width={8}>
            <label>Instructions</label>
            <textarea
              name="instructions"
              onChange={props.handleChange}
              value={recipes.instructions}
              type="text"
              rows={3}
            />
          </Form.Field>
          <Button className="button" type="submit" floated="right">
            Add
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default InputForm;
