import React from 'react';

export default function ContainerJars(props) {
  return (
    <div style={{ height: '100vh' }} className="row d-flex flex-md-row justify-content-center align-items-center">
      <img className="col-xs-3 p-4 mt-3 mx-5" key="first" src="images/green-jar-1.svg"></img>
      <img className="col-xs-3 p-4 mt-3 mx-5" key="second" src="images/green-jar-2.svg"></img>
      <img className="col-xs-3 p-4 mt-3 mx-5" key="third" src="images/green-jar-3.svg"></img>
    </div>
  );
}
