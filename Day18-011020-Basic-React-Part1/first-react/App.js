import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isWhite: true,
  };

  setIsWhiteToFalse = () => {
    this.setState({ isWhite: false });
  }


  render() {
    const background = this.state.isWhite ? "white" : "lightcyan";
    const width = this.state.isWhite ? "15em" : "15em";
    const height = this.state.isWhite ? "3em" : "2em";
    const fontSize = this.state.isWhite ? "0.75em" : "1.5em";
    return (
      <div className="App" style={{ height: "100vh", backgroundColor: background }}>
        <button onClick={this.setIsWhiteToFalse} style={{ width: width, height: height, fontSize: fontSize }}>change background color</button>

      </div>
    );
  }
}

export default App;
