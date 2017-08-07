import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import RecipeItem from '../RecipeItem/RecipeItem'
import './RecipeList.css';

class RecipeList extends Component{

deleteRecipe(id){
  this.props.onDelete(id);
}

editRecipe(id){
  this.props.onEdit(id);
}

  render(){

    let recipeItem;

    if(this.props.recipes){
      recipeItem=this.props.recipes.map((recipe) => {
        return(
          <RecipeItem onEdit={this.editRecipe.bind(this)} onDelete={this.deleteRecipe.bind(this)} key={recipe.id} recipe={recipe}/>
        )
      });
    }

    return(
      <div className="recipeList box">
      {recipeItem}
      </div>
    )

  }
}

export default RecipeList;
