import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'my friend'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
         u need something? sign up for more informations about buzzleaf ventures.
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
