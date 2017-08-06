import React, { Component } from 'react';
import RecipeForm from '../RecipeForm/RecipeForm';
// import './EditRecipe.css';
import Modal from 'react-modal';
import uuid from 'uuid';
// import Modal from 'boron/DropModal';
// import './RecipeList.css';

class RecipeEdit extends Component{

  constructor(props){
    super(props);
    this.state = {
      // revisedRecipe:{
      //   id: this.props.recipe.id,
      //   food: "",
      //   ingredients: []
      // },
      revisedRecipe:{
        id: this.props.recipe.id,
        food: this.props.recipe.food,
        ingredients: this.props.recipe.ingredients
      },
      modalIsOpen: false,
      speed: 100
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({
      modalIsOpen: false,
      // revisedRecipe:{
      //   food: this.props.recipe.food,
      //   ingredients: this.props.recipe.ingredients
      // }
    });
  }

  handleSubmit(e){

    e.preventDefault();
    const revised = this.state.revisedRecipe;

    this.props.editRecipe(this.state.revisedRecipe);

  }


  handleNameChange(e){
    this.setState({revisedRecipe:{
      food: e.target.value,
      ingredients: this.state.revisedRecipe.ingredients
    }
  });
  }

  // handleNameChange(e){
  //   let id = this.state.currentRecipe.id;
  //   let food = this.state.currentRecipe.food;
  //   let ingredients = this.state.currentRecipe.ingredients;
  //
  //   this.setState({revisedRecipe:{
  //     food: food
  //   }
  // });
  // }

  handleIndChange(e){
    this.setState({revisedRecipe:{
      food: this.state.revisedRecipe.food,
      ingredients: e.target.value/*.split(",")*/
    }
  });
  }

  // handleIndChange(e){
  //   let id = this.state.currentRecipe.id;
  //   let food = this.state.currentRecipe.food;
  //   let ingredients = this.state.currentRecipe.ingredients;
  //   this.setState({revisedRecipe:{
  //     ingredients: ingredients
  //   }
  // });
  // }



  render(){
    const speed = this.state.speed;
    // let recipe=this.props.recipe;
    // let foodName=this.state.revisedRecipe.food;
    // let ingredients=recipe.ingredients;

    return(
      <div>
        <button className="button is-primary" onClick={this.openModal}>Edit Recipe</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          closeTimeoutMS={speed}
          contentLabel="Example Modal"
        >
        <div className="field">
          <h2 className="title is-2">Edit Recipe</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label className="label">Recipe</label>
            <div className="control">
              <input className="input" type="text" placeholder="Recipe Name" ref="recipeName" value={this.state.revisedRecipe.food} onChange={this.handleNameChange.bind(this)}/>
            </div>
            <div className="field">
            <label className="label">Ingredients</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Enter ingredients. (if more than 1 ingredient, separate them with commas)" ref="ingredients" value={this.state.revisedRecipe.ingredients} onChange={this.handleIndChange.bind(this)}/>
              <span className="icon is-small is-left">
                <i className="fa fa-flask"></i>
              </span>
            </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" onClick={this.closeModal}>Edit Recipe</button>
              </div>
              <div className="control">
                <button className="button" onClick={this.closeModal}>Cancel</button>
              </div>
            </div>
            </form>
        </div>
        </Modal>
      </div>
    );
  }
}

export default RecipeEdit;
