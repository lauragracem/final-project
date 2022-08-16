import React from 'react';
import ContainerBackpacks from '../components/containerBackpacks';
import Colors from '../components/colorChoices';

export default function ContainerSubTypesThree(props) {
  return (
    <div style={{ height: '100vh' }} className="container d-flex flex-column justify-content-center align-items-center">
      <Colors />
      <ContainerBackpacks />
    </div>
  );
}
