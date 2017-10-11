import React, { Component } from "react";
import "./App.css";
import TextOutput from "./Components/TextOutput.js";

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

  componentDidMount() {
    const localKeys = Object.keys(localStorage);
    const restoredLocal = localKeys.map(item => {
      return JSON.parse(localStorage.getItem(item));
    });
    this.setState({
      recipeList: restoredLocal
    });
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
      id: this.state.id || Date.now()
    };

    const stringifyNewRecipe = JSON.stringify(newRecipe);
    console.log("StringMe", stringifyNewRecipe);
    localStorage.setItem(newRecipe.id, stringifyNewRecipe);

    const localKeys = Object.keys(localStorage);
    const restoredLocal = localKeys.map(item => {
      return JSON.parse(localStorage.getItem(item));
    });
    this.setState({
      recipeList: restoredLocal,
      recipe: {
        title: "",
        ingredients: [],
        instructions: ""
      }
    });

    // this.setState(prevState => ({
    //   recipeList: prevState.recipeList.concat([newRecipe]),
    //   recipe: {
    //     title: "",
    //     ingredients: [],
    //     instructions: ""
    //   }
    // }));
  };

  handleIngredientChange = e => {
    this.setState({ ingredient: e.target.value });
  };

  handleIngredientSubmit = e => {
    if (this.state.ingredient === "" || this.state.ingredient === null) {
      return -1;
    }
    e.preventDefault();
    const newItem = {
      ingredient: this.state.ingredient,
      id: Date.now()
    };
    this.setState((prevState, { recipe }) => ({
      recipe: {
        title: this.state.recipe.title,
        ingredients: prevState.recipe.ingredients.concat(newItem),
        instructions: this.state.recipe.instructions
      },
      ingredient: ""
    }));
    /* may look into immutablitiy-helper or object.assign, on a day we feel ambitious */
    // this.setState((prevState, {recipe}) => ({
    //   recipe: {...recipe, ingredients: prevState.recipe.ingredients.concat([newItem])},
    //   ingredient: ""
    // }));
    // this.setState({ingredients: [...this.state.recipe.ingredients, newItem]})
    // this.setState({ ingredients: [e.target.value, ...this.state.ingredients]})
  };

  deleteRecipe = id => {
    localStorage.removeItem(id);
    this.setState((prevState, { recipeList }) => ({
      recipeList: prevState.recipeList.filter(item => item.id !== id)
    }));
  };

  deleteItem = id => {
    this.setState((prevState, { recipe }) => ({
      recipe: {
        title: this.state.recipe.title,
        ingredients: prevState.recipe.ingredients.filter(
          item => item.id !== id
        ),
        instructions: this.state.recipe.instructions
      }
    }));
  };

  editRecipe = (id, e) => {
    const item = JSON.parse(localStorage.getItem(id));
    console.log(item);
    console.log(e.target);
    this.setState({
      recipe: {
        title: item.recipe.title,
        ingredients: item.recipe.ingredients,
        instructions: item.recipe.instructions
      },
      id: item.id
    });
  };

  onInputChange = newRecipe => {
    this.setState({ recipe: newRecipe });
    console.log("App:", this.state.recipeList);
    console.log("Ingredients:", this.state.recipe.ingredients);
  };

  render() {
    console.log("Recipe:", this.state.recipe);
    console.log("RecipeList:", this.state.recipeList);
    // console.log("Ingredient:", this.state.ingredient);
    // console.log("Ingredients:", this.state.recipe.ingredients);
    console.log("LocalStorage:", localStorage);    
    return (
      <div className="App">
        <TextOutput
          recipeList={this.state.recipeList}
          recipe={this.state.recipe}
          ingredient={this.state.ingredient}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleIngredientChange={this.handleIngredientChange}
          handleIngredientSubmit={this.handleIngredientSubmit}
          deleteItem={this.deleteItem}
          deleteRecipe={this.deleteRecipe}
          editRecipe={this.editRecipe}
        />
      </div>
    );
  }
}

export default App;
