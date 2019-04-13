import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    count: 0
  }

  increment = () => {
      const newNumber = this.state.count + 1;
      this.setState({count: newNumber});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.increment}>Click me</button>
          <p>{this.state.count}</p>
        </header>
      </div>
    );
  }
}

export default App;
