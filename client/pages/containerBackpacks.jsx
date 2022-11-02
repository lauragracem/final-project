import React, { useState } from 'react';
import ContainerBackpacks from '../components/containerBackpacks';
import BlueBackpacks from '../components/blue-backpacks';
import YellowBackpacks from '../components/yellow-backpacks';
import PeachBackpacks from '../components/peach-backpacks';
import Colors from '../components/colorChoices';
import BackArrow from '../components/backArrow';
import { useNavigate } from 'react-router-dom';

export default function ContainerSubTypesThree(props) {

  const [color, setColor] = useState('green');
  const navigate = useNavigate();

  return (
    <div style={{ height: '100vh' }} className="container d-flex flex-column justify-content-center align-items-center">
      <Colors setColor={setColor} />
      {color === 'green' && <ContainerBackpacks />}
      {color === 'blue' && <BlueBackpacks />}
      {color === 'yellow' && <YellowBackpacks />}
      {color === 'peach' && <PeachBackpacks />}
      <div onClick={() => navigate('/#')}>
        <BackArrow />
      </div>
    </div>

  );
}
