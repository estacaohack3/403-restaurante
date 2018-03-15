import React, { Component } from 'react';
import Banner from './components/Banner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Restaurante da Gi</h1>
        </header>

        <Banner />

        <section>
          <div>
            <img />
            <h2>Macarrão</h2>
            <h3>R$ 20,00</h3>
          </div>
        </section>

        <footer>
          <p>Rua da Gi</p>
          <p>(11) 91234 4321</p>
        </footer>
      </div>
    );
  }
}

export default App;
