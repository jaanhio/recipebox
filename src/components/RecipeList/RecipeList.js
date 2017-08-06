import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import RecipeItem from '../RecipeItem/RecipeItem'
import './RecipeList.css';

class RecipeList extends Component{

deleteRecipe(id){
  this.props.onDelete(id);
}

editRecipe(index){
  
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
    // return(
    //   <div className="recipelist box">
    //     <ul>
    //       <li>
    //         <Collapsible trigger={foodName} transitionTime="200" easing="ease-in-out">
    //         <nav className="panel">
    //           <p className="panel-heading">
    //             Ingredients
    //           </p>
    //           <a className="panel-block">
    //             bulma
    //           </a>
    //           <a className="panel-block">
    //             marksheet
    //           </a>
    //           <a className="panel-block">
    //             minireset.css
    //           </a>
    //           <a className="panel-block">
    //             jgthms.github.io
    //           </a>
    //           <a className="panel-block">
    //             daniellowtw/infboard
    //           </a>
    //           <a className="panel-block">
    //             <span className="panel-icon">
    //               <i className="fa fa-code-fork"></i>
    //             </span>
    //             mojs
    //           </a>
    //           <div className="panel-block">
    //             <button className="button is-warning is-outlined">
    //               Delete
    //             </button>
    //             <button className="button is-primary is-outlined">
    //               Edit
    //             </button>
    //           </div>
    //           </nav>
    //         </Collapsible>
    //       </li>
    //       <li>
    //       <Collapsible trigger="st" transitionTime="200" easing="ease-in-out">
    //       <nav className="panel">
    //         <p className="panel-heading">
    //           Ingredients
    //         </p>
    //         <a className="panel-block">
    //           bulma
    //         </a>
    //         <a className="panel-block">
    //           marksheet
    //         </a>
    //         <a className="panel-block">
    //           minireset.css
    //         </a>
    //         <a className="panel-block">
    //           jgthms.github.io
    //         </a>
    //         <a className="panel-block">
    //           daniellowtw/infboard
    //         </a>
    //         <a className="panel-block">
    //           <span className="panel-icon">
    //             <i className="fa fa-code-fork"></i>
    //           </span>
    //           mojs
    //         </a>
    //         <div className="panel-block">
    //           <button className="button is-warning is-outlined">
    //             Delete
    //           </button>
    //           <button className="button is-primary is-outlined">
    //             Edit
    //           </button>
    //         </div>
    //         </nav>
    //       </Collapsible>
    //       </li>
    //     </ul>
    //   </div>
    // );
  }
}

export default RecipeList;
