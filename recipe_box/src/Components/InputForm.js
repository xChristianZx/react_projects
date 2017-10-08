import React, { Component } from "react";
import { Container, Header, Modal, Button, Icon } from "semantic-ui-react";
import AddForm from "./AddRecipeForm.js";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen} icon='add' circular floated='right'></Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"        
      >
        <div className="form-container-wrapper">
          <Container className="form-container" textAlign="center">
            <Header as="h2" dividing>
              Add Recipe
            </Header>
            <AddForm
              recipe={this.props.recipe}
              ingredient={this.props.ingredient}
              handleChange={this.props.handleChange}
              handleSubmit={this.props.handleSubmit}
              handleIngredientChange={this.props.handleIngredientChange}
              handleIngredientSubmit={this.props.handleIngredientSubmit}
              deleteItem={this.props.deleteItem}
            />
          </Container>
        </div>
      </Modal>
    );
  }
}

export default InputForm;
