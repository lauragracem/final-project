import React from 'react';

export default function Colors({ setColor }) {

  return (
    <div className="row d-flex flex-row justify-content-center my-5">
      <img className="mx-4" src="images/BlueColorSquare.svg" onClick={() => setColor('blue')} />
      <img className="mx-4" src="images/YellowColorSquare.svg" onClick={() => setColor('yellow')} />
      <img className="mx-4" src="images/PeachColorSquare.svg" onClick={() => setColor('peach')} />
      <img className="mx-4" src="images/GreenColorSquare.svg" onClick={() => setColor('green')} />
    </div>
  );
}
