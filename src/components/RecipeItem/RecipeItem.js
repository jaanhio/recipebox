import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import EditRecipe from '../EditRecipe/EditRecipe';

class RecipeItem extends Component{

  deleteRecipe(id){
    this.props.onDelete(id);
  }

  // editRecipe(id, revised){
  //   this.props.onEdit(id, revised);
  // }

  editRecipe(){
      this.props.onEdit(this.props.index);
  }

  render(){

    let recipe=this.props.recipe
    let foodName=recipe.food;
    let ingredientItem;

    if(recipe.ingredients){
      ingredientItem=recipe.ingredients.map(ingredient=>{
        return(
          <a className="panel-block">
            {ingredient}
          </a>
        )
      })
    }
    return(
      <ul>
        <li className="Recipe">
        <Collapsible trigger={foodName} transitionTime="200" easing="ease-in-out">
        <nav className="panel">
          <p className="panel-heading">
            Ingredients
          </p>
          {ingredientItem}
          <div className="panel-block">
            <button className="button is-warning is-outlined" onClick={this.deleteRecipe.bind(this, this.props.recipe.id)}>
              Delete
            </button>
            <EditRecipe recipe={this.props.recipe} editRecipe={this.editRecipe.bind(this, this.props.recipe.id)}/>
          </div>
          </nav>
        </Collapsible>
        </li>
      </ul>
    );
  }
}

export default RecipeItem;
