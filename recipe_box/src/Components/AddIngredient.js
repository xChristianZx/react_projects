import React, { Component } from "react";
import PropTypes from "prop-types";
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
      ingredientsList: [],
      ingredient: "",
      modalOpen: false
    };
  }
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleChange = e => {
    console.log(e.target);
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
      ingredientsList: prevState.ingredientsList.concat(newItem),
      ingredient: ""
    }));
  };

  deleteItem = (id) => {
    this.setState(prevState => ({
      ingredientsList: prevState.ingredientsList.filter(item => item.id !== id)
    }));
  };

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
    return <List as="ul">{items}</List>;
  };

  render() {
    //console.log('ingredientsList: ',this.state.ingredientsList);
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Add Ingredients</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="small"
      >
        <Container className="add-ingredients-list-container" text>
          <Modal.Content>
            <Header content="Ingredients" as="h2" textAlign="center" dividing />
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
            <Button
              onClick={this.handleClose}
              floated="right"
            >
              Done
            </Button>
          </Modal.Actions>
        </Container>
      </Modal>
    );
  }
}

AddIngredient.propTypes = {
  ingredientsList: PropTypes.array,
  ingredient: PropTypes.string
};

export default AddIngredient;
