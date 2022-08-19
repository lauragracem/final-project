import React from 'react';

export default function YellowJars(props) {
  return (
    <div style={{ width: '100vw' }} className="row d-flex flex-row justify-content-center align-items-center mb-5">
      <img className="col-xs-3 p-4 my-3 mx-5" src="images/yellowJar1.svg"></img>
      <img className="col-xs-3 p-4 my-3 mx-5" src="images/yellowJar2.svg"></img>
      <img className="col-xs-3 p-4 my-3 mx-5" src="images/yellowJar3.svg"></img>
    </div>
  );
}
