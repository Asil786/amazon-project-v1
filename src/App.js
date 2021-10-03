import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselContainer from './component/Carousel';


function App() {
  return (
    <div className="App">
      <Header />
      <CarouselContainer />
      <Home />
    </div>
  );
}

export default App;