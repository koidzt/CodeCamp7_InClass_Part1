import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./components/PersonCard";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      isWhite: true,
      inputValue: "",
    };
    this.changeIsWhiteToFalse = this.changeIsWhiteToFalse.bind(this);
  }

  changeIsWhiteToFalse() {
    this.setState({ isWhite: false })
  }

  render() {
    //this.state.isWhite = false; ห้ามทำเด็จขาด ห้ามกำหนดค่า แต่ไม่ได้ห้ามเรียกใช้
    let background = this.state.isWhite ? "white" : "lightcyan";
    return (
      <div className="App" style={{ backgroundColor: background }}>
        <input />
        <button onChange={e => this.setState({inputValue: e.target.value})}>Change Colour</button>
        <button onClick={this.changeIsWhiteToFalse}>Change Colour</button>
        <Person name="Koi"
          age={28}
          color="Black" />
        <Person
          name="Cake"
          age={29}
          color="Blue" />
        <Person
          name="Pup"
          age={27}
          color="Green" />
      </div>
    );
  }
}

export default App;
