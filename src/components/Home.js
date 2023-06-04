import React from 'react';
import Navigation from './Navigation';
import './Home.css';

const Home = () => {
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

  return (
    <div>
      <Navigation />
      <br></br>
      <div className="home-container"> {}
        <h1>Restaurantes</h1>
        <ul>
          {restaurants.map((restaurant, index) => (
            <li key={index} className="restaurant-container">
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;