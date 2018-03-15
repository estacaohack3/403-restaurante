import React, { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import './App.css';
import gi from './assets/gi.jpg';

class App extends Component {
  render = () => {
    return (
      <div>
        <Header />

        <marquee>
          <img src={gi} />
          <span>Oi fofinhos! Olha quem está passando</span>
        </marquee>

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
