import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ProductDetails from './PersonDetails'
import Loading from './Loading'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ProductDetails />
            <Route path="/load" component={ Loading }/>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
