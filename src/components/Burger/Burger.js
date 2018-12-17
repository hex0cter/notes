import React, { Component } from 'react';
import './Burger.css';
import burgeIcon from '../../assets/burger.svg'

class Burger extends Component {
  render() {
    return (
      <div className='burger'>
      <img src={burgeIcon}/>
      </div>
    );
  }
}

export default Burger;
