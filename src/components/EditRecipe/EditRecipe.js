import React, { Component } from 'react';
import './EditRecipe.css';
import Modal from 'react-modal';
import uuid from 'uuid';

class EditRecipe extends Component{

  constructor(props){
    super(props);
    this.state = {
      revisedRecipe:{},
      currentRecipe:{
        // id: this.props.tempRecipe.id,
        id: 3,
        // food: this.props.tempRecipe.food,
        food: "sotong",
        // ingredients: this.props.tempRecipe.ingredients
        ingredients: ["tentacles", "ink"]
      },
      modalIsOpen: this.props.editMode,
      // modalIsOpen: true,
      speed: 100
    };
    // this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // openModal(){
  //   this.setState({modalIsOpen: true});
  // }

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
    if(this.refs.recipeName.value===""){
      alert("Recipe name is required!");
    }
    else{
      this.setState({revisedRecipe:{
        id: this.state.currentRecipe.id,
        food: this.refs.recipeName.value,
        ingredients: this.refs.ingredients.value.split(","),
        modalIsOpen: false
      }}, function(){
        this.props.saveChanges(this.state.revisedRecipe);
      });
    }
  }


  handleNameChange(e){
    this.setState({currentRecipe:{
      id: this.state.currentRecipe.id,
      food: e.target.value,
      ingredients: this.state.currentRecipe.ingredients
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
    this.setState({currentRecipe:{
      id: this.state.currentRecipe.id,
      food: this.state.currentRecipe.food,
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
              <input className="input" type="text" placeholder="Recipe Name" ref="recipeName" value={this.state.currentRecipe.food} onChange={this.handleNameChange.bind(this)}/>
            </div>
            <div className="field">
            <label className="label">Ingredients</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Enter ingredients. (if more than 1 ingredient, separate them with commas)" ref="ingredients" value={this.state.currentRecipe.ingredients} onChange={this.handleIndChange.bind(this)}/>
              <span className="icon is-small is-left">
                <i className="fa fa-flask"></i>
              </span>
            </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" onClick={this.closeModal}>Save Changes</button>
              </div>
              <div className="control">
                <button id="two" className="button" onClick={this.closeModal}>Cancel</button>
              </div>
            </div>
            </form>
        </div>
        </Modal>
      </div>
    );
  }
}

export default EditRecipe;
