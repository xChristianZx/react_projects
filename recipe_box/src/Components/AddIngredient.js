import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Header, Form, Button, List } from "semantic-ui-react";

class AddIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      ingredient: ""
    };
    // this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange = e => {
    this.setState({
      ingredient: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      ingredient: this.state.ingredient,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      ingredient: ""
    }));
  };

  deleteItem = (id, e) => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id)
    }));
    console.log(e.target);
  };

  renderList = list => {
    const items = list.map(item => {
      return (
        <div key={item.id}>
          <List.Item className="ingredient-list-item" floated="left">
            {item.ingredient}
            {item.id}
            <Button
              circular
              size="mini"
              icon="close"
              floated="right"
              onClick={this.deleteItem.bind(this,item.id)}
            />
          </List.Item>
        </div>
      );
    });
    return <List bulleted>{items}</List>;
  };

  render() {
    console.log(this.state.items);
    return (
      <Container className="add-ingredients-list-container" text>
        <Header content="Ingredients" as="h2" textAlign="center" dividing />
        {this.renderList(this.state.items)}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              value={this.state.ingredient}
              onChange={this.handleChange}
              width={8}
            />
            <Button icon="add" circular />
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

AddIngredient.propTypes = {
  items: PropTypes.array,
  ingredient: PropTypes.string
};

export default AddIngredient;
