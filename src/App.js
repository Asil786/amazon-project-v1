import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselContainer from './component/Carousel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Navbar />
            {/* <CarouselContainer /> */}
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <CarouselContainer />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;