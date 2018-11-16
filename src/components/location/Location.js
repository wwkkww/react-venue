import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="location" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.152666240265!2d101.69126451475711!3d3.0537782977761645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a966b90de45%3A0x39a4c2964a9076a6!2sBukit+Jalil+National+Stadium!5e0!3m2!1sen!2smy!4v1542354516911" 
        width="100%" 
        height="500px" 
        frameBorder="0" 
        allowFullScreen></iframe>

      <div className="location_tag">
        <div> Location</div>
      </div>
    </div>
  );
};

export default Location;