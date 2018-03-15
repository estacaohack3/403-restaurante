import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  componentWillMount = () => {
    this.setState({classeMenu: ''});
    // this.exibirMenu = this.exibirMenu.bind(this);
  }

  exibirMenu = () => {
    this.setState({classeMenu: 'ativa'});
  }

  ocultarMenu = () => {
    this.setState({classeMenu: ''});
  }
  
  render() {
    return (
      <div>
        <nav className={this.state.classeMenu}>
          <span onClick={this.ocultarMenu}>X</span>
          <ul>
            <li>Massas</li>
            <li>Carnes</li>
            <li>Não Carnes</li>
            <li>Doces</li>
            <li>Massagem</li>
            <li>Conselho espiritual</li>
          </ul>
        </nav>

        <header onClick={this.exibirMenu}>
          <h1>Restaurante da Gi</h1>
        </header>
      </div>
    );
  }
}

export default Header;