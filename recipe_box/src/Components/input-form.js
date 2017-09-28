import React, { Component } from "react";
import { Container, Header, Form, Button, Input } from "semantic-ui-react";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      recipe: {
        title: "",
        ingredients: "",
        instructions: ""
      }
    };
  }

  handleChange = e => {
    const recipe = this.state.recipe;
    const name = e.target.name;
    recipe[name] = e.target.value;
    this.setState({ recipe: recipe });
  };

  handleSubmit = e => {
    e.preventDefault();
    let newRecipe = {
      recipe: this.state.recipe,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newRecipe),
      recipe: {
        title: "",
        ingredients: "",
        instructions: ""
      }
    }));
    console.log(this.state.items);
  };

  render() {
    return (
      <div className="form-container-wrapper">
        <Container className="form-container" textAlign="center">
          <Header as="h2" dividing>
            Add Recipe
          </Header>
          <Form
            className="form-wrapper"
            size={"tiny"}
            onSubmit={this.handleSubmit}
          >
            <Form.Field width={8}>
              <label>Recipe Name</label>
              <Form.Input
                name="title"
                onChange={this.handleChange}
                value={this.state.recipe.title}
                placeholder="casserole, tootsieroll, eggrolls..."
                type="text"
              />
            </Form.Field>
            <Form.Field width={8}>
              <label>Ingredients</label>
              <Form.Input
                name="ingredients"
                onChange={this.handleChange}
                value={this.state.recipe.ingredients}
                type="text"
                placeholder="eggs, bacon, hashbrowns..."
              />
            </Form.Field>
            <Form.Field width={8}>
              <label>Instructions</label>
              <textarea
                name="instructions"
                onChange={this.handleChange}
                value={this.state.recipe.instructions}
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
  }
}

export default InputForm;
