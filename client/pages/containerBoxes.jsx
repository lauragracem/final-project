import React from 'react';
import ContainerBoxes from '../components/containerBoxes';
import Colors from '../components/colorChoices';

export default function containers(props) {
  return (
    <div style={{ height: '100vh' }} className="container row d-flex flex-md-row justify-content-center align-items-center ml-0 mr-0 pl-0 pr-0">
      <Colors />
      <ContainerBoxes />
    </div>
  );

}
