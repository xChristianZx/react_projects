import React, { Component } from "react";
import "./App.css";
import TextOutput from "./Components/TextOutput.js";
import InputForm from "./Components/InputForm.js";
import AddIngredient from './Components/AddIngredient.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeList: [],
      recipe: {
        title: "",
        ingredients: [],
        instructions: ""
      },
      ingredient: ""
    };    
  }

  handleChange = e => {
    const recipe = this.state.recipe;
    const name = e.target.name;
    recipe[name] = e.target.value;
    this.setState({ recipe: recipe });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    let newRecipe = {
      recipe: {
        title: this.state.recipe.title,
        ingredients: this.state.recipe.ingredients,
        instructions: this.state.recipe.instructions
      },
      id: Date.now()
    };
    this.setState(prevState => ({
      recipeList: prevState.recipeList.concat([newRecipe]),
      recipe: {
        title: "",
        ingredients: [],
        instructions: ""
      }
    }));

    // this.onInputChange(this.state.recipe);
    console.log("HandleSubmit", this.state.recipeList, this.state.recipe);
  };

  handleIngredientChange = e => {
    this.setState({ ingredient: e.target.value });
  };

  handleIngredientSubmit = e => {
    if(this.state.ingredient == '' || this.state.ingredient == null) {return -1;}    
    e.preventDefault();
    const newItem = {
      ingredient: this.state.ingredient,
      id: Date.now()
    };
    
    this.setState((prevState, {recipe}) => ({
      recipe: {...recipe, ingredients: prevState.recipe.ingredients.concat([newItem])},
      ingredient: ""
    }));
    // this.setState({ingredients: [...this.state.recipe.ingredients, newItem]})
    // this.setState({ ingredients: [e.target.value, ...this.state.ingredients]}) 
  };

  onInputChange = newRecipe => {
    this.setState({ recipe: newRecipe });
    console.log("App:", this.state.recipeList);
    console.log("Ingredients:", this.state.recipe.ingredients);
  };

  render() {
    console.log('Recipe:', this.state.recipe, typeof this.state.recipe);
    console.log('RecipeList:', this.state.recipeList, typeof this.state.recipeList);
    console.log('Ingredient:', this.state.ingredient, typeof this.state.ingredient);
    console.log('Ingredients:', this.state.recipe.ingredients, typeof this.state.recipe.ingredients);
    return (
      <div className="App">
        <InputForm
          recipe={this.state.recipe}
          ingredient={this.state.ingredient}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleIngredientChange={this.handleIngredientChange}
          handleIngredientSubmit={this.handleIngredientSubmit}
        />
        {/* <AddIngredient /> */}
        <TextOutput recipeList={this.state.recipeList} />
      </div>
    );
  }
}

export default App;
