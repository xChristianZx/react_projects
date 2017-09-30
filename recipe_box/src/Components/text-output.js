import React, { Component } from "react";
import { Container, Accordion, Icon, Label, List } from "semantic-ui-react";

const TextOutput = ({ recipeList }) => {
  if (!recipeList) {
    return;
  }
  console.log(recipeList);

  const panels = recipeList.map((panel, i) => {
    return {
      title: {
        content: panel.recipe.title,
        key: `title-${i}`
      },
      content: {
        content: <List items={panel.recipe.ingredients} bulleted/>,
        key: `content-${i}`
      }
    //   panel.recipe.instructions
    };
  });

  return (
    <div className='output-container'>
      <Accordion defaultActiveIndex={0} panels={panels} styled />
    </div>
  );
};

export default TextOutput;
