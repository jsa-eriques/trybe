import React from 'react';
import './App.css';


class App extends React.Component {
  constructor () {
    super();
    console.log('Componente Sendo Construido');
    this.event1 = this.event1.bind(this);
    this.event1 = this.event1.bind(this);
    this.event1 = this.event1.bind(this);
  }
  event1 () {
    console.log('event1');
  };
  event2 () {
    console.log('event2');
  };
  event3 () {
    console.log('event3');
  };
  render() {
    console.log(this)
    return (
    <div>
      <button onClick={ this.event1 }>Botão</button>
      <button onClick={ this.event2 }>Botão</button>
      <button onClick={ this.event3 }>Botão</button>
    </div>
    )
  }
}

export default App;
