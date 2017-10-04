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
      items: [],
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
      items: prevState.items.concat(newItem),
      ingredient: ""
    }));
  };

  deleteItem = (id, e) => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id)
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
              onClick={this.deleteItem.bind(this, item.id)}
            />
          </List.Item>
        </div>
      );
    });
    return <List as="ul">{items}</List>;
  };

  render() {
    return (
      <Modal
        dimmer={true}
        trigger={<Button onClick={this.handleOpen}>Add Ingredients</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="large"
      >
        <Container className="add-ingredients-list-container" text>
          <Modal.Content>
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
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.handleClose} floated="right" attached='bottom'>Done</Button>
          </Modal.Actions>
        </Container>
      </Modal>
    );
  }
}

AddIngredient.propTypes = {
  items: PropTypes.array,
  ingredient: PropTypes.string
};

export default AddIngredient;
