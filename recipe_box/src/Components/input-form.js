import React, { Component } from "react";
import { Container, Header, Form, Button, Input } from "semantic-ui-react";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "",
      ingredientsText: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Container className='form-container'>
          <Header as='h2' textAlign='center' dividing>Add Recipe</Header>
          <Form size={"large"}>
            <Form.Field>
              <label>Recipe Name</label>
              <Form.Input placeholder="casserole, tootsieroll, eggrolls..." type="text" width={8} />
            </Form.Field>
            <Form.Field>
              <label>Ingredients</label>
              <Form.Input type="text" placeholder="eggs, bacon, hashbrowns..." width={8}/>
            </Form.Field>
            <Form.Field>
              <label>Instructions</label>
              <textarea type="text" rows={3} />
            </Form.Field>
            <Button className='button' type="submit" floated='right'>Add</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default InputForm;
