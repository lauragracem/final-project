import React, { useState } from 'react';
import ContainerJars from '../components/containerJars';
import BlueJars from '../components/blue-jars';
import YellowJars from '../components/yellow-jars';
import PeachJars from '../components/peach-jars';
import Colors from '../components/colorChoices';
import BackArrow from '../components/backArrow';
import { useNavigate } from 'react-router-dom';

export default function Jars(props) {

  const [color, setColor] = useState('green');
  const navigate = useNavigate();

  return (
    <div style={{ height: '100vh' }} className="container d-flex flex-column justify-content-center align-items-center my-5">
      <Colors setColor={setColor} />
      {color === 'green' && <ContainerJars />}
      {color === 'blue' && <BlueJars />}
      {color === 'yellow' && <YellowJars />}
      {color === 'peach' && <PeachJars />}
      <div onClick={() => navigate('/#')}>
        <BackArrow />
      </div>
    </div>
  );
}
