import React, { useState } from 'react';
import './NewRestaurant.css';

const NewRestaurant = ({ setRestaurants, restaurants }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurant = {
      name,
      description,
      address,
      image
    };

    setRestaurants([...restaurants, newRestaurant]);

    setName('');
    setDescription('');
    setAddress('');
    setImage('');
  };

  return (
    <div>
      <br />
      <h2>Añade un restaurante nuevo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Descripcion:</label>
          <br />
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="address">Direccion:</label>
          <br />
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Imagen URL:</label>
          <br />
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="search-button">Guardar</button>
      </form>
    </div>
  );
};

export default NewRestaurant;