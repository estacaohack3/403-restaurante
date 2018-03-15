import React, { Component } from 'react';
import './Lista.css';
import produtos from './produtos.json';

class Lista extends Component {  
  render = () => {
    let html = [];

    for(let produto of produtos){
      html.push(
        <div>
          <img src={`produtos/${produto.imagem}`} />
          <h2>{produto.nome}</h2>
          <h3>R$ {produto.preco}</h3>
        </div>
      );
    }

    return (
      <section className="lista">
        {html}
      </section>
    );
  }
}

export default Lista;