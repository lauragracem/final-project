import React from 'react';
import ContainerJars from '../components/containerJars';
import Colors from '../components/colorChoices';

export default function Jars(props) {
  return (
    <div style={{ height: '100vh' }} className="container d-flex flex-column justify-content-center align-items-center my-5">
      <Colors />
      <ContainerJars />
    </div>
  );
}
