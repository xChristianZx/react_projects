import React, { Component } from "react";
import PropTypes from "prop-types";
import "./AddIngredient.css";
import {
  Container,
  Header,
  Form,
  Button,
  List,
  Modal
} from "semantic-ui-react";

class AddIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  renderList = list => {
    const items = list.map(item => {
      return (
        <div key={item.id}>
          <List.Item as="li" className="ingredient-list-item" floated="left">
            {item.ingredient}
            <Button
              circular
              size="mini"
              icon="close"
              floated="right"
              onClick={this.props.deleteItem.bind(this, item.id)}
            />
          </List.Item>
        </div>
      );
    });
    return (
      <div className="ingredient-list-item-wrapper">
        <List as="ul">{items}</List>
      </div>
    );
  };

  render() {
    return (
      <div className="add-ingredients-modal-container">
        <Modal
          trigger={<Button onClick={this.handleOpen}>Add Ingredients</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          size="small"
          basic
        >
          <Container className="add-ingredients-list-container" text>
            <Header content="Ingredients" as="h2" textAlign="center" dividing />
            <Modal.Content>
              {this.renderList(this.props.recipe.ingredients)}
              <Form onSubmit={this.props.handleIngredientSubmit}>
                <Form.Group>
                  <Form.Input
                    name="ingredients"
                    value={this.props.ingredient}
                    onChange={this.props.handleIngredientChange}
                    width={8}
                  />
                  <Button icon="add" circular />
                </Form.Group>
              </Form>
            </Modal.Content>
            <Modal.Actions className="modal-ingredients-button-container">
              <Button onClick={this.handleClose} floated="right">
                Done
              </Button>
            </Modal.Actions>
          </Container>
        </Modal>
      </div>
    );
  }
}

AddIngredient.propTypes = {
  ingredientsList: PropTypes.array,
  ingredient: PropTypes.string
};

export default AddIngredient;
