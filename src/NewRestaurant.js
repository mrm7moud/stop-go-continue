import React, { Component, PropTypes } from 'react';
import './NewRestaurant.css';

class NewRestaurant extends Component {
  constructor () {
    super();
    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();

    if (!this.state.name) return false;

    this.props.restaurantsRef.push({ name: this.state.name });
    this.setState({ name: '' });
  }

  render () {
    const { name } = this.state;

    return (
      <form
        className='NewRestaurant'
      >
        <input
          type='text'
          value={name}
          placeholder='Type Your Note'
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button
          onClick={this.handleSubmit}
          disabled={!name}
        >
          Submit
        </button>
      </form>
    );
  }
}

NewRestaurant.propTypes = {
  restaurantsRef: PropTypes.object
};

export default NewRestaurant;
