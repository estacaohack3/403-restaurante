import React, { Component } from 'react';
import './Banner.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

let banners = [banner1, banner2, banner3];
let i = 0;

class Banner extends Component {
  //executado antes do componente aparecer na tela
  componentWillMount(){
    this.setState({bannerAtivo: banners[i]});
    
    setInterval(() => {
      i++;

      if(i == banners.length){
        i = 0;
      }

      this.setState({bannerAtivo: banners[i]});
    }, 2000);
  }

  render() {
    return (
      <section className="banner" >
        <img src={this.state.bannerAtivo} />
      </section>
    );
  }
}

export default Banner;