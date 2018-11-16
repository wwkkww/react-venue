import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    prices:[100, 250, 500],
    positions:['Stand', 'Seat', 'Star'],
    desc: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      'Exercitationem fuga possimus corrupti odio illum quidem deserunt ut, delectus ad ullam', 'debitis vero ducimus maiores repudiandae dolore molestiae vitae nulla explicabo!'
    ],
    linkto:[
      'http://sales/a',
      'http://sales/b',
      'http://sales/c'
    ], 
    delay: [500, 0, 1000]
  }

  showBoxes = () => (
      this.state.prices.map((box, i) => (
        <Zoom delay={this.state.delay[i]} key={i}>
          <div className="pricing_item">
            <div className="pricing_inner_wrapper">
              <div className="pricing_title">
                <span>${this.state.prices[i]}</span>
                <span>{this.state.positions[i]}</span>
              </div>
              <div className="pricing_description">
                {this.state.desc[i]}
              </div>
              <div className="pricing_buttons">
              <MyButton 
                text="BUY NOW"
                bck="red"
                color="white"
                link={this.state.linkto[i]}
              />
              </div>
            </div>
          </div>
        </Zoom>
        

      ))
  )

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
        
      </div>
    );
  }
}

export default Pricing;