import React, { Component } from 'react';
import "./App.css";
import Header from './components/Header/Header';
import FavItem from './components/FavItem/FavItem';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="current-faves-section">
          <h2>Our Current Faves</h2>
          <div className="current-faves">
            <FavItem text="workwear"/>
            <FavItem text="skirts" />
            <FavItem text="wedding" />
            <FavItem text="midi dresses" />
            <FavItem text="button downs" />
            <FavItem text="jewelry" />
            <FavItem text="swim" />
            <FavItem text="home" />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
