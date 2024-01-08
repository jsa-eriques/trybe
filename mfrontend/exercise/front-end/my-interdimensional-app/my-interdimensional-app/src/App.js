// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log('Constructor')
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json();
    this.setState({characters: data.results})
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.fetchCharacters();
  }

  render() {
    console.log('render')
    // this.fetchCharacters();
    const { characters } = this.state;
    // console.log(characters)
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;