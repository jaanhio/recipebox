import React, { Component } from 'react';
import RecipeForm from '../RecipeForm/RecipeForm';
import './AddRecipe.css';
import Modal from 'react-modal';
import uuid from 'uuid';
// import Modal from 'boron/DropModal';
// import './RecipeList.css';

class RecipeInput extends Component{

  constructor(props){
    super(props);
    this.state = {
      newRecipe:{},
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
    this.setState({modalIsOpen: false});
  }

  handleSubmit(e){
    if(this.refs.recipeName.value === ""){
      alert("Recipe name is required!");
    }
    else{
      this.setState({newRecipe:{
        id: uuid.v4(),
        food: this.refs.recipeName.value,
        ingredients: this.refs.ingredients.value.split(","),
        modalIsOpen: false
      }}, function(){
        this.props.addRecipe(this.state.newRecipe);
      });
    }
    e.preventDefault();
  }


  render(){
    const speed = this.state.speed;
    return(
      <div>
        <button className="button is-outlined" onClick={this.openModal}>Add Recipe</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          closeTimeoutMS={speed}
          contentLabel="Example Modal"
        >
        <div className="field">
          <h2 className="title is-2">Add a Recipe</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label className="label">Recipe</label>
            <div className="control">
              <input className="input" type="text" placeholder="Recipe Name" ref="recipeName"/>
            </div>
            <div className="field">
            <label className="label">Ingredients</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Enter ingredients. (if more than 1 ingredient, separate them with commas)" ref="ingredients"/>
              <span className="icon is-small is-left">
                <i className="fa fa-flask"></i>
              </span>
            </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" onClick={this.closeModal}>Add Recipe</button>
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
    /*return(
      <div>
        <button className="button is-primary" onClick={this.openModal}>Add Recipe</button>
        <Modal ref="modal" keyboard={this.callback}>
        <div className="field">
          <h2 className="title is-2">Add a Recipe</h2>
          <label className="label">Recipe</label>
          <div className="control">
            <input className="input" type="text" placeholder="Recipe Name" />
          </div>
          </div>

          <div className="field">
          <label className="label">Ingredients</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Enter ingredients. (if more than 1 ingredient, separate them with commas)"/>
            <span className="icon is-small is-left">
              <i className="fa fa-flask"></i>
            </span>
          </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary">Add Recipe</button>
            </div>
            <div className="control">
              <button className="button" onClick={this.closeModal}>Close</button>
            </div>
        </div>
        </Modal>
      </div>
    );*/
  }
}

export default RecipeInput;
