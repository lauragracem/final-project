import React from 'react';

export default function ContainerBoxes(props) {
  return (
    <div style={{ height: '100vh' }} className="row d-flex justify-content-center align-items-center">
      <img className="col-xs-6 mt-5 mt-md-0 mr-md-5" key="first" src="images/green-box.png" />
      <img className="col-xs-6 mb-5 mt-md-0 ml-md-5" key="second" src="images/green-lunch.png" />
    </div>
  );

}
