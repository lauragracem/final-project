import React from 'react';

export default function ContainerJars(props) {
  return (
    <div style={{ width: '100vw' }} className="row d-flex flex-row justify-content-center align-items-center mb-5">
      <img className="col-xs-3 p-4 my-3 mx-5" key="first" src="images/green-jar-1.svg"></img>
      <img className="col-xs-3 p-4 my-3 mx-5" key="second" src="images/green-jar-2.svg"></img>
      <img className="col-xs-3 p-4 my-3 mx-5" key="third" src="images/green-jar-3.svg"></img>
    </div>
  );
}
