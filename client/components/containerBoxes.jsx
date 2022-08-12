import React from 'react';

export default function ContainerBoxes(props) {
  return (
    <div style={{ height: '100vh' }} className="row d-flex flex-xs-column flex-sm-column flex-md-row justify-content-center align-items-center">
      <img className="col-xs-6 d-flex mt-sm-0 mt-md-0 mr-md-5 mx-5" src="images/green-box.svg" />
      <img className="col-xs-6 d-flex mb-sm-0 mt-md-0 ml-md-5 mx-5" src="images/green-lunch.svg" />
    </div>
  );

}
