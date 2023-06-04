import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ setRestaurants, restaurants }) => {
  return (
    <nav className="nav"> {}
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/search">Buscar</Link>
        </li>
        <li>
          <Link to="/new-restaurant">Restaurante nuevo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;