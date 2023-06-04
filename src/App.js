import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Search from './components/Search';
import NewRestaurant from './components/NewRestaurant';

const App = () => {
  const [restaurants, setRestaurants] = useState([]); 

  return (
    <Router>
      <div>
        <Navigation setRestaurants={setRestaurants} restaurants={restaurants} /> {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/new-restaurant" element={<NewRestaurant setRestaurants={setRestaurants} restaurants={restaurants} />} /> {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;