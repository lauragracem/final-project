import React from 'react';

export default function ContainerJars(props) {
  return (
    <div style={{ height: '100vh' }} className="row d-flex justify-content-center align-items-center">
      <img className="col-xs-3 p-4 mt-3" key="first" src="images/green-jar-1.png"></img>
      <img className="col-xs-3 p-4 mt-3" key="second" src="images/green-jar-2.png"></img>
      <img className="col-xs-3 p-4 mt-3" key="third" src="images/green-jar-3.png"></img>
    </div>
  );
}
