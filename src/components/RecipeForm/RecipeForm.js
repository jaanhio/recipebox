import React, { Component } from 'react';
import Modal from 'react-modal';

class RecipeForm extends Component{

  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="modal">
        <Modal isOpen={true}>
          <p>test</p>
        </Modal>
      </div>
    );
  }
}

export default RecipeForm;
