import React, { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Lista from './components/Lista';
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

        <Lista />

        <footer>
          <p>Rua da Gi</p>
          <p>(11) 91234 4321</p>
        </footer>
      </div>
    );
  }
}

export default App;

// handleTouch = (event) => {
//   let novoToque = event.touches[0].screenX
  
//   if(! this.ultimoToque){
//     this.ultimoToque = novoToque;
//     return;
//   }

//   let distancia = novoToque - this.ultimoToque;

//   if(distancia > 200){
//     //abrir menu
//   }
// }
