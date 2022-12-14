import React, { useState } from 'react';
import ContainerBoxes from '../components/containerBoxes';
import BlueBox from '../components/blue-boxes';
import YellowBox from '../components/yellow-boxes';
import PeachBox from '../components/peach-boxes';
import Colors from '../components/colorChoices';
import BackArrow from '../components/backArrow';
import { useNavigate } from 'react-router-dom';

export default function Containers(props) {

  const [color, setColor] = useState('green');
  const navigate = useNavigate();

  return (
    <div style={{ height: '100vh', width: '100vw' }} className="container d-flex flex-column justify-content-center align-items-center">
      <Colors setColor={setColor} />
      {color === 'green' && <ContainerBoxes />}
      {color === 'blue' && <BlueBox />}
      {color === 'yellow' && <YellowBox />}
      {color === 'peach' && <PeachBox />}
      <div onClick={() => navigate('/#')}>
        <BackArrow />
      </div>
    </div>
  );
}
