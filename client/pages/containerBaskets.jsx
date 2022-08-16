import React from 'react';
import ContainerBaskets from '../components/containerBaskets';
import Colors from '../components/colorChoices';

export default function Baskets(props) {
  return (
    <div style={{ height: '100vh' }} className="container d-flex flex-column justify-content-center align-items-center my-1">
      <Colors />
      <ContainerBaskets />
    </div>
  );
}
