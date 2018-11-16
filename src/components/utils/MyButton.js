import React from 'react';
import Button from '@material-ui/core/Button';
import iconTicket from '../../resources/images/icons/ticket.png'; 

const MyButton = (props) => {
  return (
    <Button 
      href={props.link}
      variant="contained"
      size="medium"
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      <img src={iconTicket} alt="iconTicket" className="iconImage"/>
      {props.text}
    </Button>
  );
};

export default MyButton;