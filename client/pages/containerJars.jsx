import React, { useState } from 'react';
import ContainerJars from '../components/containerJars';
import BlueJars from '../components/blue-jars';
import YellowJars from '../components/yellow-jars';
import PeachJars from '../components/peach-jars';
import Colors from '../components/colorChoices';
import BackArrow from '../components/backArrow';

export default function Jars(props) {

  const [color, setColor] = useState('green');

  return (
    <div style={{ height: '100vh' }} className="container d-flex flex-column justify-content-center align-items-center my-5">
      <Colors setColor={setColor} />
      {color === 'green' && <ContainerJars />}
      {color === 'blue' && <BlueJars />}
      {color === 'yellow' && <YellowJars />}
      {color === 'peach' && <PeachJars />}
      <BackArrow/>
    </div>
  );
}
