import React, { Component } from "react";
import { Accordion, Icon, Button, Modal } from "semantic-ui-react";
import InputForm from "./InputForm";

class RecipeAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  renderRecipeList = () => {
    return ( 
      <div>
        <Accordion.Title content="test 1"/>
        <Accordion.Content content="testing" />
      </div>
    );
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="output-container">
        <Accordion className="accordion-title" styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            Click the button to add a recipe
            <InputForm
              recipe={this.props.recipe}
              ingredient={this.props.ingredient}
              handleChange={this.props.handleChange}
              handleSubmit={this.props.handleSubmit}
              handleIngredientChange={this.props.handleIngredientChange}
              handleIngredientSubmit={this.props.handleIngredientSubmit}
              deleteItem={this.props.deleteItem}
            />
          </Accordion.Title>
        </Accordion>
      </div>
    );
  }
}

export default RecipeAccordion;