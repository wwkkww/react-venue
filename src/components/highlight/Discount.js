import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 50
  }
  
  runPercentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.runPercentage()
    },30)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">

        <Fade
          onReveal={() => this.runPercentage()}
        >
          <div className="discount_percentage">
            <span>{this.state.discountStart}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        
        <Slide right>
          <div className="discount_description">
            <h3>Purchase your tickets before 30th November 2018</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum accusantium laboriosam quibusdam delectus consequatur sed enim quo quod! Atque magnam officiis quia fuga unde qui voluptatem quo sapiente et!</p>

            <MyButton 
              text="Purchase now"
              bck="#ffa800"
              color="#ffffff"
              link="http://google.com"
            />
          </div>
          
        </Slide>

        </div>
        
      </div>
    );
  }
}

export default Discount;