import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import uuid from 'uuid';
import Modal from 'react-modal';
import RecipeList from './components/RecipeList/RecipeList';
import AddRecipe from './components/AddRecipe/AddRecipe';
import EditRecipe from './components/EditRecipe/EditRecipe';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      recipes:[],
      tempName:"",
      tempInd:[],
      editMode: false
    };
  }

  getRecipes(){
    this.setState({recipes:[
      {
        id: uuid.v4(),
        food: "pumpkin pie",
        ingredients: ["pumpkin puree", "sweetened condensed milk", "eggs", "pumpkin pie spice", "pie crust"]
      },
      {
        id: uuid.v4(),
        food: "spaghetti",
        ingredients: ["noodles", "tomato sauce", "meatballs"]
      },
      {
        id: uuid.v4(),
        food: "onion pie",
        ingredients: ["onion", "pie crust"]
      },

    ]});
  }

  componentWillMount(){
    this.getRecipes();
  }

  handleAddRecipe(recipe){
    let recipes = this.state.recipes;
    console.log(recipes);
    recipes.push(recipe);
    console.log(recipes);
    this.setState({recipes: recipes});
  }

  handleSaveChanges(revisedRecipe){
    let recipes=this.state.recipes;
    let id = revisedRecipe.id;
    let index = recipes.findIndex(x => x.id === id);
    recipes.splice(index,1,revisedRecipe);
    this.setState({recipes: recipes});
  }

  handleDeleteRecipe(id){
    let recipes = this.state.recipes;
    let index = recipes.findIndex(x => x.id === id);
    recipes.splice(index,1);
    this.setState({recipes: recipes});
  }

  handleEditRecipe(id){
    let recipes = this.state.recipes;
    // console.log(recipes);
    let index = recipes.findIndex(x => x.id === id);
    let editedRecipe = this.state.recipes[index];
    // console.log(editedRecipe);
    this.setState({
      editMode: true,
      tempName: editedRecipe.food,
      tempInd: editedRecipe.ingredients
    });
    // console.log(this.state.editMode);
    // console.log(this.state.tempRecipe);
    console.log(this.state.tempName);
    console.log(this.state.tempInd);
    // recipes.splice(index,1,revised);
    // console.log(recipes);
    // this.setState({recipes: recipes});
  }

  render() {
    return (
      <div className="App">
        <RecipeList  recipes={this.state.recipes} onDelete={this.handleDeleteRecipe.bind(this)} onEdit={this.handleEditRecipe.bind(this)}/>
        <AddRecipe addRecipe={this.handleAddRecipe.bind(this)}/>
        <EditRecipe saveChanges={this.handleSaveChanges.bind(this)} editMode={this.state.editMode} tempRecipe={this.state.tempRecipe}/>
      </div>
    );
  }
}

export default App;
