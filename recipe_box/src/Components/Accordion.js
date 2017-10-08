import React, { Component } from "react";
import { Accordion, Icon, Button } from "semantic-ui-react";

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

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="output-container">
        <Accordion styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Button icon="add" circular floated='right' />
          </Accordion.Title>
        </Accordion>
      </div>
    );
  }
}

export default RecipeAccordion;
