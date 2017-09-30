import React, { Component } from "react";
import "./App.css";
// import AccordionExampleStyled from './Components/accordion.js';
import TextOutput from "./Components/text-output.js";
import InputForm from "./Components/input-form.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      recipe: {
        title: "",
        ingredients: [],
        instructions: ""
      },
      addIngredient: ""
    };
    console.log("APP RECIPIES:", this.state.items);
  }

  handleChange = e => {
    const recipe = this.state.recipe;
    const name = e.target.name;
    recipe[name] = e.target.value;
    this.setState({ recipe: recipe });
  };

  handleIngredientsChange = e => {
    this.setState({ addIngredient: e.target.value });
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
        ingredients: [],
        instructions: ""
      }
    }));
    // this.onInputChange(this.state.recipe);
    console.log("HandleSubmit", this.state.items, this.state.recipe);
  };

  onInputChange = newRecipe => {
    this.setState({ recipe: newRecipe });
    console.log("App:", this.state.items);
    console.log("Ingredients:", this.state.recipe.ingredients);
  };

  render() {
    return (
      <div className="App">
        <InputForm
          recipes={this.state.recipe}
          addIngredients={this.state.addIngredient}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleIngredientsChange={this.handleIngredientsChange}
        />
        <TextOutput recipeList={this.state.items} />
      </div>
    );
  }
}

export default App;
