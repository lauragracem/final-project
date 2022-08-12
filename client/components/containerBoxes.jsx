import React from 'react';

export default function ContainerBoxes(props) {
  return (
    <div style={{ height: '100vh' }} className="row d-flex flex-md-row justify-content-center align-items-center">
      <img className="col-xs-6 mt-sm-0 mt-md-0 mr-md-5 mx-5" src="images/green-box.svg" />
      <img className="col-xs-6 mb-sm-0 mt-md-0 ml-md-5 mx-5" src="images/green-lunch.svg" />
    </div>
  );

}
