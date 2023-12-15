import React from 'react';

const ParticleComponent = () => {
  return (
    <div className="nav-container">
      <h3 className="span">
        <span className="loader">
          <span className="m">B</span>
          <span className="m">E</span>
          <span className="m">N</span>
          <span className="m">E</span>
          <span className="m">F</span>
          <span className="m">I</span>
          <span className="m">T</span>
          <span className="m">S</span>
          <span className="m">&nbsp;</span>
          <span className="m">o</span>
          <span className="m">f</span>
          <span className="m">&nbsp;</span>
          <span className="m">T</span>
          <span className="m">E</span>
          <span className="m">C</span>
          <span className="m">H</span>
          <span className="m">N</span>
          <span className="m">O</span>
          <span className="m">L</span>
          <span className="m">O</span>
          <span className="m">G</span>
          <span className="m">I</span>
          <span className="m">E</span>
          <span className="m">S</span>
        </span>
      </h3>
      <style>
        {`
          .span {
            font-size: 2vw;
            letter-spacing: 0.7em;
            font-family: "ROBOTO", sans-serif;
            font-weight: 300;
            color: #faebd7;
            z-index: 4;
          }

          .m:hover {
            color: #ff0266;
            font-weight: 500;
            font-size: 2.2vw;
          }
        `}
      </style>
    </div>
  );
};

export default ParticleComponent;
