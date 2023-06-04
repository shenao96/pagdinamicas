import React, { useState } from 'react';
import Navigation from './Navigation';
import './Search.css';

const Search = () => {
  const restaurants = [
    {
      nombre: 'KFC',
      descripcion: 'Cadena de restaurantes conocida por sus cubos de pollo frito, combinaciones de comidas y acompañamientos.',
      direccion: 'Carrera 70 # 1-141 Centro Comercial Arkadia Local 423',
      imagen: 'kfc.png',
    },
    {
      nombre: 'Asados la 80',
      descripcion: 'Restaurante relajado con patio cubierto y opciones clásicas de carne, ensalada y pescado.',
      direccion: 'Cra 83 #30-27',
      imagen: 'asadosla80.png',
    },
    {
      nombre: 'Domino´s pizza',
      descripcion: 'Cadena de comida a domicilio o para llevar con gran variedad de pizzas y otros platos y acompañamientos.',
      direccion: 'Dg. 75B #6-105 Local 109',
      imagen: 'Dominos.png',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <h1>Búsqueda de Restaurantes</h1>
      <div className="search-input">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="search-button">Buscar</button>
      </div>
      <div className="restaurants-container">
        {filteredRestaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-container">
            <div>
              <img
                src={restaurant.imagen}
                alt={restaurant.nombre}
                className="restaurant-image"
              />
            </div>
            <div className="restaurant-info">
              <h2 className="restaurant-name">{restaurant.nombre}</h2>
              <p className="restaurant-description">{restaurant.descripcion}</p>
              <p className="restaurant-address">{restaurant.direccion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;