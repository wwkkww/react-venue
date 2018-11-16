import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured/Index';
import Hightlight from './components/highlight/Highlight';
import Venue from './components/venue/Venue';
import Pricing from './components/pricing/Pricing';
import Location from './components/location/Location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div 
        className="App" 
        style={{ 
          height:"1500px",
          background:"Red"
        }}
      >
        <Header />

        <Element name="featured">
          <Featured />
        </Element>
        
        <Element name="venue">
          <Venue />
        </Element>

        <Element name="highlight">
          <Hightlight />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>
        
        <Element name="location">
          <Location />
        </Element>
        
        <Footer />
      </div>
    );
  }
}

export default App;
