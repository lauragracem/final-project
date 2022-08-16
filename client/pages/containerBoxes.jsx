import React from 'react';
import ContainerBoxes from '../components/containerBoxes';
import BlueBox from '../components/blue-boxes';
import Colors from '../components/colorChoices';

export default function containers(props) {

  return (
    <div style={{ height: '100vh', width: '100vw' }} className="container d-flex flex-column justify-content-center align-items-center">
      <Colors />
      <ContainerBoxes />
      <BlueBox />
    </div>
  );
}
