import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { createUser } from 'sdk';
import CardFront from '../Card/CardFront';
import CardBack from '../Card/CardBack';
import './style.css';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      name: null,
      age: null,
      email: null,
      newsletter: null
    };
  }

  flipCard = () => {
    const { name, age } = this.state;

    if (name && age) {
      this.setState(state => ({
        isFlipped: !state.isFlipped
      }));
    }
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = async () => {
    const formIsValid = this.validateFormData(this.state);

    const response = formIsValid && (await createUser(this.state));
    console.log(response);
  };

  validateFormData = ({ name, age, email, newsletter }) => {
    if (!name || !age || !email || !newsletter) {
      return false;
    }

    return true;
  };

  render() {
    const { isFlipped } = this.state;

    return (
      <div className='signup'>
        <ReactCardFlip isFlipped={isFlipped}>
          <CardFront
            key='front'
            onChange={this.handleInputChange}
            onClick={this.flipCard}
          />
          <CardBack
            onClick={this.handleFormSubmit}
            onChange={this.handleInputChange}
            key='back'
          />
        </ReactCardFlip>
      </div>
    );
  }
}
