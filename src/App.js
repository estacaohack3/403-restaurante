import React, { Component } from 'react';
import './App.css';
import banner1 from './assets/banner1.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Restaurante da Gi</h1>
        </header>

        <section className="banner" >
          <img src={banner1} />
        </section>

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
